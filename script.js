// --- STATE ---
let currentQIndex = 0;
let userAnswers = {};
let bookmarks = {};
let timeLeft = 180 * 60; 
let timerRunning = false;
let timerInt;
let fontSz = 16;
let timerVis = true;
let currentLang = 'tr';
let isExamFinished = false; // New State for Review Mode
let examStartTime = null;
// Add to --- STATE --- section
let currentUserTC = ""; // To store the logged-in ID
let activeKeyboardInput = null; // To track which input the keyboard is serving

// --- INIT ---
setInterval(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById('header-clock').innerText = timeStr;
}, 1000);

// --- NAVIGATION ---
function goInstructions() {
    document.getElementById('view-login').classList.add('hidden');
    // Show Header only
    document.getElementById('main-header-wrapper').style.display = 'flex';
    document.getElementById('view-instructions').style.display = 'flex';
}

function startExam() {
    document.getElementById('view-instructions').style.display = 'none';
    document.getElementById('view-exam').style.display = 'flex';
    
    // 1. Set the absolute Start Time (New Logic)
    if (!examStartTime) {
        examStartTime = Date.now(); 
    }

    // 2. Set Visual Stat Times
    const now = new Date(examStartTime);
    const end = new Date(examStartTime + 180 * 60000); // 180 mins later
    document.getElementById('stat-start').innerText = now.getHours() + ":" + String(now.getMinutes()).padStart(2,'0');
    document.getElementById('stat-end').innerText = end.getHours() + ":" + String(end.getMinutes()).padStart(2,'0');

    // 3. Start Timer & Save
    if (!timerRunning) {
        timerRunning = true;
        timerInt = setInterval(tick, 1000);
    }
    
    saveExamState(); // <--- Important: Save the start time immediately
    renderQuestion();
}

// --- EXAM LOGIC ---
// --- NEW: TCKN VERIFICATION ---
function verifyAndFinishExam() {
    const inputTC = document.getElementById('finish-tc-input').value.trim();
    
    if (inputTC === "") {
        alert("Lütfen T.C. Kimlik veya Y.U. numaranızı giriniz.");
        return;
    }

    // --- FIX START ---
    // If the system has "forgotten" the ID (is empty or default "ÖĞRENCİ"), 
    // we trust the number the user is entering right now.
    if (!currentUserTC || currentUserTC === "ÖĞRENCİ" || currentUserTC === "Misafir Aday" || currentUserTC === "") {
        currentUserTC = inputTC; 
    }
    // --- FIX END ---

    if (inputTC !== currentUserTC) {
        alert("Hata: Girdiğiniz numara, giriş yaptığınız numara ile eşleşmiyor!");
        // Optionally clear the input
        document.getElementById('finish-tc-input').value = "";
        return;
    }

    // If match successful:
    hideKeyboard();
    closeModal('modal-finish');
    finishExamProcess();
}

// --- NEW: EXAM FINISH & RESULTS CALCULATION ---
function finishExamProcess() {
    clearInterval(timerInt);
    timerRunning = false;
    isExamFinished = true;
    
    // 1. Calculate Results
    let correct = 0;
    let wrong = 0;
    let empty = 0;
    const total = questions.length;

    questions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        if (!userAns) {
            empty++;
        } else if (userAns === q.correct) {
            correct++;
        } else {
            wrong++;
        }
    });

    // 2. Calculate Score (Example: Correct * 1.25 as per previous code)
    const scoreStr = (correct * 1.25).toFixed(2);
    
    // 3. Save final state
    saveExamState();

    // 4. Populate Results View HTML
    populateResultsView(total, correct, wrong, empty, scoreStr);

    // 5. Switch Views
    document.getElementById('main-header-wrapper').style.display = 'none'; // Hide header
    document.getElementById('view-exam').style.display = 'none';
    document.getElementById('view-results').style.display = 'flex';
    
    // Ensure we scroll to top of results
    window.scrollTo(0,0);
}

// Helper function to populate the results HTML
function populateResultsView(total, correct, wrong, empty, score) {
    // Summary Table
    document.getElementById('res-total').innerText = total;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-empty').innerText = empty;
    document.getElementById('res-score').innerText = score;

    // Detailed Table Rows
    const tbody = document.getElementById('res-detail-body');
    tbody.innerHTML = ''; // Clear existing

    questions.forEach((q, idx) => {
        const userAns = userAnswers[idx] || ""; // Empty string if null
        let statusLabel = "";
        let rowClass = "";

        if (userAns === "") {
            statusLabel = "Boş";
            rowClass = "res-row-empty";
        } else if (userAns === q.correct) {
            statusLabel = "Doğru";
            rowClass = "res-row-correct";
        } else {
            statusLabel = "Yanlış";
            rowClass = "res-row-wrong";
        }

        const tr = document.createElement('tr');
        tr.className = rowClass;
        tr.innerHTML = `
            <td>${q.id || idx + 1}</td>
            <td style="font-weight:bold;">${userAns}</td>
            <td>${q.correct}</td>
            <td>${statusLabel}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Helper: Decides what text to put in the blank (The placeholder or the answer)
// Helper: Decides what text to put in the blank


// --- RENDER ---
function renderQuestion() {
    const q = questions[currentQIndex];
    const card = document.getElementById('q-card');
    
    document.getElementById('btn-prev').classList.toggle('disabled', currentQIndex === 0);
    document.getElementById('btn-next').classList.toggle('disabled', currentQIndex === questions.length - 1);

    const displayNum = q.id ? q.id + "." : (currentQIndex + 1) + ".";
    const isMarked = bookmarks[currentQIndex];

    const sidebarHTML = `
        <div class="q-num-col">
            <div class="q-number-big">${displayNum}</div>
            <svg class="q-bookmark-icon ${isMarked ? 'active' : ''}" viewBox="0 0 24 24" onclick="toggleMark()">
                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
        </div>
    `;

    // 1. Process standard Question Text
    let processedText = processText(q.text, q); 
    processedText = processDynamicText(processedText, q, false); 

    // 2. Process Paragraph Text (Type B Questions)
    let processedPara = q.paragraph ? processText(q.paragraph, q) : "";
    
    // --- START OF FIX ---
    if (q.paragraph) {
        // A. Fill in answers the user has already given (e.g. turning (17)--- into (17) Answer)
        processedPara = processDynamicText(processedPara, q, true);

        // B. Highlight the CURRENT question number (e.g. "(17)" or "(17)----") in RED
        const qId = q.id || (currentQIndex + 1);
        
        // This Regex matches "(17)" followed optionally by spaces and dashes
        const regexHighlight = new RegExp(`\\(${qId}\\)(?:\\s*-*)`);
        
        // We use INLINE STYLES to force the color immediately
        processedPara = processedPara.replace(regexHighlight, 
            `<span style="color: #dc3545; font-weight: bold;">$&</span>`
        );
    }
    // --- END OF FIX ---

    const explanationHTML = isExamFinished && q.explanation ? `
        <div class="explanation-box visible">
                <span style="font-weight:700; color:#28a745; display:block; margin-bottom:10px;">ÇÖZÜM ANALİZİ</span>
                ${q.explanation}
        </div>
    ` : '';

    if (q.type === 'A') {
        card.innerHTML = `
            ${sidebarHTML}
            <div class="q-body">
                <div class="q-instruction">${q.instruction}</div>
                <div class="q-text-content">${processedText}</div>
                <div class="options-container">
                    ${getOptionsHTML(q)}
                </div>
                ${explanationHTML}
            </div>
        `;
    } else if (q.type === 'B') {
        card.innerHTML = `
            <div class="layout-split">
                <div class="split-left-pane">
                    <div class="q-instruction" style="margin-bottom:15px;">${q.instruction}</div>
                    <p>${processedPara}</p>
                </div>
                <div class="split-right-pane">
                        <div style="display:flex; height:100%;">
                        ${sidebarHTML}
                        <div class="q-body" style="padding: 40px 0 0 0;">
                            <div class="q-text-content">${processedText}</div>
                            <div class="options-container">
                                ${getOptionsHTML(q)}
                            </div>
                            ${explanationHTML}
                        </div>
                        </div>
                </div>
            </div>
        `;
    }
}

// Helper to add dictionary tooltips
function processText(text, q) {
    if (!text) return "";
    if (!isExamFinished || !q.dict) return text;
    let processed = text;
    Object.keys(q.dict).forEach(word => {
        const meaning = q.dict[word];
        // Simple regex replacement (case insensitive)
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        processed = processed.replace(regex, `<span class="dict-word" data-meaning="${meaning}">$1</span>`);
    });
    return processed;
}

function processDynamicText(text, q, isParagraph) {
    if (!text) return "";
    
    // Determine the ID. 
    // Note: In your system, q.id is 1-based (1, 2, 3...)
    const qId = q.id || (currentQIndex + 1);
    
    // Get user's selected answer key (A, B, C...)
    const userAnsKey = userAnswers[currentQIndex];

    // If no answer selected yet, return text as is (with blanks)
    if (!userAnsKey) return text;

    // Get the text content of the answer (e.g., "possibility" or "confirmed / may have been involved")
    const answerText = q.options[userAnsKey];

    // --- CASE 1: Cloze Test (Questions 17-26) inside Paragraph ---
    // Pattern in your JSON: "(17)----" or "(22)----"
    // Requirement: Keep the number "(17)" and put the answer next to it in red.
    if (isParagraph && qId >= 17 && qId <= 26) {
        // Regex explanation:
        // \\(${qId}\\)  -> Finds "(17)"
        // (?:-*)        -> Non-capturing group for optional dashes following it
        const regexCloze = new RegExp(`\\(${qId}\\)(?:-*)`);
        
        if (regexCloze.test(text)) {
            return text.replace(regexCloze, `(${qId}) <span class="filled-blank">${answerText}</span>`);
        }
    }

    // --- CASE 2: All Other Questions (Question Text Blanks) ---
    // Targets: 1-16, 27-36, 43-62, 63-67, 72-75
    // Pattern in your JSON: "----" (4 dashes)
    if (!isParagraph) {
        // Regex to find 3 or more dashes, underscores, or dots
        // Added 'g' flag to find ALL blanks in the string (for multi-blank questions)
        const regexBlank = /-{3,}|_{3,}|\.{3,}/g;
        
        // check if question has multiple blanks (e.g. "Word1 / Word2")
        // and if the text actually has multiple "----" placeholders
        const matches = text.match(regexBlank);
        const isMultiBlank = answerText.includes(' / ') && matches && matches.length > 1;

        if (isMultiBlank) {
            // Split answer: "confirmed / involved" -> ["confirmed", "involved"]
            const parts = answerText.split(' / ');
            let partIndex = 0;
            
            // Replace each "----" sequentially with the corresponding part
            return text.replace(regexBlank, () => {
                const part = parts[partIndex] || ""; 
                partIndex++;
                return `<span class="filled-blank">${part}</span>`;
            });
        } else {
            // Single blank -> Just replace the first "----" found
            // Remove 'g' logic for single replace to ensure safety or just use replace() which does first only by default
            return text.replace(/-{3,}|_{3,}|\.{3,}/, `<span class="filled-blank">${answerText}</span>`);
        }
    }

    return text;
}

function highlightGap(text, id) {
        return text.replace(`(${id})`, `<b style="color:var(--red-btn);">(${id})</b>`);
}

function getOptionsHTML(q) {
    return Object.keys(q.options).map(key => {
        const isSelected = userAnswers[currentQIndex] === key;
        let className = 'option-row';
        
        if (isExamFinished) {
            if (key === q.correct) {
                className += ' correct';
            } else if (isSelected) {
                className += ' wrong';
            }
        } else {
            if (isSelected) className += ' selected';
        }

        // Disable clicking if finished
        const clickAction = isExamFinished ? '' : `onclick="answer('${key}')"`;

        return `
            <div class="${className}" ${clickAction}>
                <div class="opt-letter-circle">${key}</div>
                <div class="opt-text-val">${q.options[key]}</div>
            </div>
        `;
    }).join('');
}

function answer(key) {
    if (isExamFinished) return; 

    // Toggle logic: If clicking the same answer, unselect it.
    if (userAnswers[currentQIndex] === key) {
        delete userAnswers[currentQIndex];
    } else {
        userAnswers[currentQIndex] = key;
    }

    saveExamState();
    renderQuestion(); // Re-render to show/hide the red text immediately
}

function toggleMark() {
    bookmarks[currentQIndex] = !bookmarks[currentQIndex];
    saveExamState();
    renderQuestion();
}

function nextQuestion() {
    if (currentQIndex < questions.length - 1) {
        currentQIndex++;
        saveExamState();
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQIndex > 0) {
        currentQIndex--;
        saveExamState();
        renderQuestion();
    }
}

// --- TIMER ---
function tick() {
    timeLeft--;
    
    // 1. Check if time is up
    if (timeLeft < 0) { 
        timeLeft = 0;
        finishExamProcess(); 
        return; 
    } 
    
    // 2. Save every 5 seconds
    if (timeLeft % 5 === 0) {
        saveExamState();
    }

    // 3. Update Header Timer
    const m = Math.floor(timeLeft / 60).toString().padStart(2,'0');
    const s = (timeLeft % 60).toString().padStart(2,'0');
    document.getElementById('header-timer').innerText = `${m}:${s}`;
    
    // --- LIVE STATUS UPDATES ---
    
    // Calculate Elapsed Time
    const totalSeconds = 180 * 60;
    const elapsed = totalSeconds - timeLeft;

    // Update Elapsed Time in Modal
    const elStat = document.getElementById('stat-elapsed');
    if (elStat) {
        elStat.innerText = Math.floor(elapsed/60) + " dk " + (elapsed%60) + " sn";
    }

    // Update Time Left in Modal
    const leftStat = document.getElementById('stat-left');
    if (leftStat) {
        leftStat.innerText = m + " dk " + s + " sn";
    }

    // --- NEW: Update Average Time (Live) ---
    const avgStat = document.getElementById('stat-avg');
    if (avgStat) {
        const count = Object.keys(userAnswers).length;
        if (count > 0) {
            const avgSec = elapsed / count;
            
            // Format logic (Minutes vs Seconds)
            if (avgSec >= 60) {
                const aM = Math.floor(avgSec / 60);
                const aS = Math.floor(avgSec % 60);
                avgStat.innerText = `${aM} dk ${aS} sn`;
            } else {
                avgStat.innerText = `${Math.floor(avgSec)} sn`;
            }
        } else {
            avgStat.innerText = "0 sn";
        }
    }
}

function toggleTimerVis() {
    timerVis = !timerVis;
    // Toggle visibility of the wrapper
    const wrapper = document.getElementById('timer-wrapper');
    if (wrapper) {
        wrapper.style.visibility = timerVis ? 'visible' : 'hidden';
    }
}

// --- MODALS & SETTINGS ---
function openModal(id) {
    document.getElementById(id).classList.add('active');
    if (id === 'modal-status') updateStatus();
}
function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    
    // The aggressive redirect logic has been removed.
    // Now, when you click a question, you will stay on the question view.
}
function toggleSettings() {
    document.getElementById('settings-panel').classList.toggle('open');
}

function updateStatus() {
    // 1. Get Answer Count
    const count = Object.keys(userAnswers).length;
    
    // 2. Update Basic Stats
    document.getElementById('stat-ans').innerText = count;
    document.getElementById('stat-rem').innerText = 80 - count;

    // 3. Calculate Average Time
    // Total exam time (180 mins) minus Time Left = Time Elapsed
    const totalSeconds = 180 * 60; 
    const elapsedSeconds = totalSeconds - timeLeft;

    let avgText = "0 sn"; // Default if no questions answered

    if (count > 0) {
        const avgSec = elapsedSeconds / count;
        
        if (avgSec >= 60) {
            const m = Math.floor(avgSec / 60);
            const s = Math.floor(avgSec % 60);
            avgText = `${m} dk ${s} sn`;
        } else {
            avgText = `${Math.floor(avgSec)} sn`;
        }
    }

    // 4. Update the HTML
    const avgEl = document.getElementById('stat-avg');
    if (avgEl) {
        avgEl.innerText = avgText;
    } else {
        console.error("HATA: 'stat-avg' ID'si HTML dosyasında bulunamadı! Lütfen index.html dosyasını kontrol edin.");
    }
}

function openReviewModal() {
    openModal('modal-review');
    
    // --- NEW LOGIC START ---
    // Only show the "Back to Results" button if the exam is actually finished
    const btnResults = document.getElementById('btn-back-results');
    if (btnResults) {
        if (isExamFinished) {
            btnResults.classList.remove('hidden');
        } else {
            btnResults.classList.add('hidden');
        }
    }
    // --- NEW LOGIC END ---

    filterReview('all', document.querySelector('.rev-btn.active'));
}

function backToResults() {
    closeModal('modal-review');
    
    // 1. Re-calculate Results (Data Population)
    // This ensures the table is not empty even if you refreshed the page.
    let correct = 0;
    let wrong = 0;
    let empty = 0;
    const total = questions.length;

    questions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        if (!userAns) {
            empty++;
        } else if (userAns === q.correct) {
            correct++;
        } else {
            wrong++;
        }
    });

    // Calculate Score (Adjust the multiplier 1.25 if needed)
    const scoreStr = (correct * 1.25).toFixed(2);

    // Fill the HTML table
    populateResultsView(total, correct, wrong, empty, scoreStr);

    // 2. Switch Views
    document.getElementById('view-exam').style.display = 'none';
    document.getElementById('main-header-wrapper').style.display = 'none'; // Hide header in results view
    document.getElementById('view-results').style.display = 'flex';
    
    // 3. Scroll to top
    window.scrollTo(0, 0);
}

function filterReview(type, btn) {
    document.querySelectorAll('.rev-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    const grid = document.getElementById('rev-grid-container');
    grid.innerHTML = '';

    // --- UPDATED LOOP START ---
    for(let i=0; i<80; i++) {
        // 1. Try to find the question by explicit ID
        let qIdx = questions.findIndex(q => q.id === (i + 1));

        // 2. If not found by ID, check if a question simply exists at this index position
        // This acts as a fallback if your data doesn't have "id" properties
        if (qIdx === -1 && questions[i]) {
            qIdx = i;
        }

        const hasData = qIdx !== -1; 
        
        // Define variables safely
        const userAnswer = hasData ? userAnswers[qIdx] : null;
        const isAns = hasData && userAnswer;
        const isMark = hasData && bookmarks[qIdx];
        const isCurr = hasData && qIdx === currentQIndex;

        let show = false;
        if (type === 'all') show = true;
        if (type === 'answered' && isAns) show = true;
        if (type === 'marked' && isMark) show = true;
        if (type === 'empty' && !isAns) show = true;

        if (show) {
            const cell = document.createElement('div');
            cell.className = 'rev-cell';
            cell.innerText = i + 1;
            
            // Color logic for finished exams
            if (isExamFinished && hasData) {
                // If the question exists, check correctness
                if (userAnswer === questions[qIdx].correct) {
                    cell.classList.add('is-correct');
                } else if (userAnswer) { 
                    cell.classList.add('is-wrong');
                }
            } else {
                // Normal exam mode
                if (isAns) cell.classList.add('answered');
            }

            if (isMark) cell.classList.add('marked');
            if (isCurr) cell.classList.add('active'); 

            // Only make it clickable if the question actually exists
            if (hasData) {
                cell.onclick = () => {
                    currentQIndex = qIdx;
                    renderQuestion();
                    closeModal('modal-review');
                };
                cell.style.cursor = "pointer"; // Ensure cursor shows it's clickable
            } else {
                cell.style.opacity = '0.5';
                cell.style.cursor = "default";
            }
            grid.appendChild(cell);
        }
    }
    // --- UPDATED LOOP END ---
}

// --- NEW FEATURES ---

function resizeFont(dir) {
    fontSz += dir;
    if (fontSz < 12) fontSz = 12;
    if (fontSz > 40) fontSz = 40; 
    document.documentElement.style.setProperty('--question-font-size', fontSz + "px");
    document.getElementById('font-disp').innerText = fontSz;
}

function changeLang(lang, btn) {
    currentLang = lang;
    document.querySelectorAll('.lang-opt').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}
// --- HIGHLIGHTER LOGIC (Mobile & Desktop) --- //

function handleHighlight() {
    const selection = window.getSelection();
    const text = selection.toString();

    // Only proceed if text is selected
    if (text.length > 0) {
        // Check if inside question area
        let node = selection.anchorNode;
        let isInsideQuestion = false;
        
        // Traverse up to find container
        while (node && node.nodeType === 1) { 
            if (node.classList.contains('q-body') || node.classList.contains('split-left-pane')) {
                isInsideQuestion = true;
                break;
            }
            node = node.parentNode;
        }
        // Fallback check for text nodes
        if (!isInsideQuestion && selection.anchorNode.parentNode) {
            let parent = selection.anchorNode.parentNode;
            while (parent) {
                if (parent.classList && (parent.classList.contains('q-body') || parent.classList.contains('split-left-pane'))) {
                    isInsideQuestion = true;
                    break;
                }
                parent = parent.parentNode;
            }
        }

        if (isInsideQuestion) {
            try {
                const range = selection.getRangeAt(0);
                
                // Avoid highlighting existing highlights (nested spans)
                if (range.commonAncestorContainer.parentNode.classList.contains('user-highlight')) {
                    return;
                }

                const span = document.createElement('span');
                span.className = 'user-highlight';
                range.surroundContents(span);
                selection.removeAllRanges(); // Clear selection
            } catch (e) {
                console.log("Cannot highlight across different blocks.");
            }
        }
    }
}

// 1. Mouse Event (Desktop)
document.addEventListener('mouseup', handleHighlight);

// 2. Touch Event (Mobile)
document.addEventListener('touchend', function() {
    // Small delay to allow mobile selection to finalize
    setTimeout(handleHighlight, 50);
});

// 3. Remove Highlight (Right Click / Long Press)
document.addEventListener('contextmenu', function(e) {
    if (e.target.classList.contains('user-highlight')) {
        e.preventDefault(); // Stop right-click menu
        
        // Unwrap text
        const parent = e.target.parentNode;
        while (e.target.firstChild) {
            parent.insertBefore(e.target.firstChild, e.target);
        }
        parent.removeChild(e.target);
        return false;
    }
});

function changeMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// --- LOGIN & VALIDATION LOGIC ---

let generatedCaptcha = "";

// 1. Initialize Captcha when script loads
window.addEventListener('load', () => {
    refreshCaptcha();
    loadExamState();
});

// 2. Generate Random Captcha
function refreshCaptcha() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    generatedCaptcha = result;
    document.getElementById('captcha-display').innerText = result;
    // Clear user input
    document.getElementById('captcha-input').value = "";
}

// 3. Audio Placeholder (Optional)
function playCaptchaSound() {
    alert("Captcha code: " + generatedCaptcha.split('').join(' '));
}

// 4. Main Login Validation
function validateLogin() {
    const tcInput = document.getElementById('tc-input').value.trim();
    const captchaInput = document.getElementById('captcha-input').value.trim();

    // A. Validate Captcha
    if (captchaInput !== generatedCaptcha) {
        alert("Hata: Girdiğiniz güvenlik kodu yanlış! Lütfen tekrar deneyiniz.");
        refreshCaptcha();
        return;
    }

    // B. Validate TC ID Number
    if (!checkTC(tcInput)) {
        alert("Hata: Geçersiz T.C. Kimlik Numarası girdiniz.");
        return;
    }

    // C. Success -> Proceed to Instructions
    // Update Header Name with ID
    document.querySelector('.user-id-text').innerText = tcInput;
    currentUserTC = tcInput; // Store for later verification
    goInstructions(); 
}

// 5. Official T.C. ID Validation Algorithm
function checkTC(value) {
    value = value.toString();
    
    // Rule 1: Must be 11 digits, cannot start with 0
    const isEleven = /^[1-9]{1}[0-9]{9}[02468]{1}$/.test(value);
    if (!isEleven) return false;

    let digits = value.split('').map(Number);
    
    // Rule 2: 10th Digit Check
    // ((1st+3rd+5th+7th+9th)*7 - (2nd+4th+6th+8th)) % 10 = 10th Digit
    let oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    let evenSum = digits[1] + digits[3] + digits[5] + digits[7];
    
    let digit10 = ((oddSum * 7) - evenSum) % 10;
    if (digit10 < 0) digit10 += 10; // Handle JS negative modulo behavior

    if (digit10 !== digits[9]) return false;

    // Rule 3: 11th Digit Check
    // (Sum of first 10 digits) % 10 = 11th Digit
    let sumFirst10 = 0;
    for (let i = 0; i < 10; i++) sumFirst10 += digits[i];
    
    if ((sumFirst10 % 10) !== digits[10]) return false;

    return true;
}

// --- LOCAL STORAGE LOGIC ---

// Save all critical data to the browser
function saveExamState() {
    // Get the current ID displayed on the screen to save it
    const currentIdText = document.querySelector('.user-id-text').innerText;

    const state = {
        currentQIndex: currentQIndex,
        userAnswers: userAnswers,
        bookmarks: bookmarks,
        startTime: examStartTime, 
        isExamFinished: isExamFinished,
        currentLang: currentLang,
        fontSz: fontSz,
        isInExam: document.getElementById('view-exam').style.display === 'flex',
        userId: currentIdText // <--- ADD THIS LINE
    };
    localStorage.setItem('elt_exam_state', JSON.stringify(state));
}

// Load data when the page opens
function loadExamState() {
    const savedJSON = localStorage.getItem('elt_exam_state');
    if (!savedJSON) return;

    const state = JSON.parse(savedJSON);

    // Restore Basic Data
    currentQIndex = state.currentQIndex || 0;
    userAnswers = state.userAnswers || {};
    bookmarks = state.bookmarks || {};
    isExamFinished = state.isExamFinished || false;
    currentLang = state.currentLang || 'tr';
    fontSz = state.fontSz || 16;
    examStartTime = state.startTime || null; // Restore Timestamp

    // Restore Settings
    const langBtn = document.querySelector(`.lang-opt[onclick*="'${currentLang}'"]`);
    if (langBtn) changeLang(currentLang, langBtn);
    document.documentElement.style.setProperty('--question-font-size', fontSz + "px");
    document.getElementById('font-disp').innerText = fontSz;

    // --- TIME CALCULATION LOGIC ---
    if (state.isInExam && !isExamFinished && examStartTime) {
        const totalDurationSeconds = 180 * 60; // 3 hours in seconds
        const now = Date.now();
        
        // Calculate seconds passed since the exam started
        const secondsPassed = Math.floor((now - examStartTime) / 1000);
        
        // Update global timeLeft based on real time
        timeLeft = totalDurationSeconds - secondsPassed;

        // CHECK: Has the time expired?
        if (timeLeft <= 0) {
            timeLeft = 0;
            // Force finish immediately
            document.getElementById('view-login').classList.add('hidden');
            document.getElementById('main-header-wrapper').style.display = 'flex';
            document.getElementById('view-exam').style.display = 'flex';
            
            alert("Süre Doldu! Sınav süresi siz yokken sona erdi."); // Alert user
            finishExamProcess(); // End exam
            return; // Stop loading
        }
    } else {
        // Fallback if no start time existed (legacy data)
        timeLeft = 180 * 60;
    }

    // Restore View if active
    if (state.isInExam || isExamFinished) {
        document.getElementById('view-login').classList.add('hidden');
        document.getElementById('main-header-wrapper').style.display = 'flex';
        document.getElementById('view-instructions').style.display = 'none';
        document.getElementById('view-exam').style.display = 'flex';

        // --- NEW CODE (USE THIS) ---
        if (state.userId) {
            document.querySelector('.user-id-text').innerText = state.userId;
            
            // ▼▼▼ ADD THIS LINE ▼▼▼
            currentUserTC = state.userId; 
            // ▲▲▲ ADD THIS LINE ▲▲▲
            
        } else {
            document.querySelector('.user-id-text').innerText = "ÖĞRENCİ";
        }

        // Update Stats Modal with original times
        if (examStartTime) {
            const startDate = new Date(examStartTime);
            const endDate = new Date(examStartTime + 180 * 60000);
            document.getElementById('stat-start').innerText = startDate.getHours() + ":" + String(startDate.getMinutes()).padStart(2,'0');
            document.getElementById('stat-end').innerText = endDate.getHours() + ":" + String(endDate.getMinutes()).padStart(2,'0');
        }

        updateFinishButton();

        renderQuestion();

        // Resume Timer only if not finished and time remains
        if (!isExamFinished && timeLeft > 0) {
            timerRunning = true;
            timerInt = setInterval(tick, 1000);
        }
    }
}

// Clear data (Use this when the user intentionally finishes the exam)
function clearExamState() {
    localStorage.removeItem('elt_exam_state');
}

// --- REVIEW EXIT LOGIC ---

function updateFinishButton() {
    const btn = document.getElementById('action-finish');
    if (!btn) return;
    
    const span = btn.querySelector('span');

    if (isExamFinished) {
        // Switch to "Exit Review" mode
        span.innerText = translations[currentLang].exitReview;
        span.setAttribute('data-key', 'exitReview');
        
        // Override the click event to exit instead of opening the modal
        btn.onclick = exitReview; 
    } else {
        // Restore "Finish Exam" mode
        span.innerText = translations[currentLang].finish;
        span.setAttribute('data-key', 'finish');
        
        // Restore original modal behavior
        btn.onclick = () => openModal('modal-finish');
    }
}

function exitReview() {
    if (confirm("İncelemeyi bitirip ana menüye dönmek istediğinize emin misiniz?")) {
        // Clear the saved exam state so we start fresh next time
        if (typeof clearExamState === 'function') {
            clearExamState(); 
        } else {
            localStorage.removeItem('elt_exam_state');
        }
        // Reload the page to go back to Login Screen
        location.reload();
    }
}

// --- NEW LOCAL LANGUAGE MENU LOGIC ---

function toggleLocalLangMenu() {
    const menu = document.getElementById('lang-custom-menu');
    menu.classList.toggle('show');
}

// Close menu if clicking outside
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.lang-wrapper-relative');
    if (wrapper && !wrapper.contains(e.target)) {
        document.getElementById('lang-custom-menu').classList.remove('show');
    }
});

function selectLocalLang(code, text, el) {
    // 1. Update the button text
    document.getElementById('lang-display-text').innerText = text;
    
    // 2. Update visual selection in the dropdown
    document.querySelectorAll('.lang-custom-option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    
    // 3. Call the main logic (reuses your existing function)
    // We pass a dummy element because your original function expects a button from the settings panel
    const dummyBtn = document.querySelector(`.lang-opt[onclick*="'${code}'"]`); 
    changeLang(code, dummyBtn || document.createElement('div'));
    
    // 4. Close menu
    document.getElementById('lang-custom-menu').classList.remove('show');
}

// --- TEST SELECTION MENU LOGIC ---

function toggleTestMenu() {
    const menu = document.getElementById('test-custom-menu');
    // Close language menu if open, to avoid clutter
    document.getElementById('lang-custom-menu').classList.remove('show');
    menu.classList.toggle('show');
}

// Update the global click listener to close BOTH menus if clicked outside
document.addEventListener('click', function(e) {
    // 1. Close Language Menu
    const langWrapper = document.querySelector('.lang-wrapper-relative');
    if (langWrapper && !langWrapper.contains(e.target)) {
        document.getElementById('lang-custom-menu').classList.remove('show');
    }

    // 2. Close Test Menu
    const testWrapper = document.querySelector('.test-dropdown-wrapper');
    if (testWrapper && !testWrapper.contains(e.target)) {
        document.getElementById('test-custom-menu').classList.remove('show');
    }
});

// --- VIRTUAL KEYBOARD LOGIC ---

function showKeyboard(inputElement) {
    activeKeyboardInput = inputElement;
    document.getElementById('virtual-keyboard').classList.add('active');
    // Optional: Scroll on mobiles to ensure input isn't hidden by keyboard
    if(window.innerWidth < 992) {
         setTimeout(() => {
             inputElement.scrollIntoView({behavior: "smooth", block: "center"});
         }, 300);
    }
}

function hideKeyboard() {
    document.getElementById('virtual-keyboard').classList.remove('active');
    activeKeyboardInput = null;
}

// Type a number
function vkType(num) {
    if (activeKeyboardInput) {
        // Enforce max length (11 for TC)
        if (activeKeyboardInput.value.length < 11) {
             activeKeyboardInput.value += num;
        }
    }
}

// Backspace
function vkBack() {
    if (activeKeyboardInput && activeKeyboardInput.value.length > 0) {
        activeKeyboardInput.value = activeKeyboardInput.value.slice(0, -1);
    }
}

// Clear All
function vkClear() {
    if (activeKeyboardInput) {
        activeKeyboardInput.value = "";
    }
}

// Close keyboard if clicking outside inputs or keyboard itself
document.addEventListener('click', function(e) {
    const kb = document.getElementById('virtual-keyboard');
    const isInput = e.target.tagName === 'INPUT' && e.target.type === 'text';
    const clickedKb = kb.contains(e.target);
    
    if (!isInput && !clickedKb && kb.classList.contains('active')) {
        hideKeyboard();
    }
});

// --- RESULTS PAGE ACTIONS ---

function startReview() {
    // 1. Hide Results, Show Exam
    document.getElementById('view-results').style.display = 'none';
    document.getElementById('view-exam').style.display = 'flex';
    document.getElementById('main-header-wrapper').style.display = 'flex'; // Bring back the header

    // 2. Reset to Question 1
    currentQIndex = 0;
    
    // 3. Render the page in "Finished" mode
    renderQuestion();
    updateFinishButton(); // Updates the top-right button to say "Exit"

}

function downloadPDF() {
    // 1. Select the element
    const element = document.querySelector('.res-container');

    // 2. Generate filename
    const dateStr = new Date().toISOString().slice(0,10);
    const userId = currentUserTC || "Candidate";
    const filename = `ExamResult_${userId}_${dateStr}.pdf`;

    // 3. Configure options
    const opt = {
        margin:       [10, 10, 10, 10], // mm
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
            scale: 2,       // High resolution
            useCORS: true, 
            scrollY: 0      // Important: Helps capture the top of the expanded table
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        // NEW: Prevents cutting rows in half
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] } 
    };

    // 4. Activate CSS overrides
    document.body.classList.add('is-printing');

    // 5. Generate
    html2pdf().set(opt).from(element).save().then(() => {
        // 6. Restore original UI
        document.body.classList.remove('is-printing');
    }).catch(err => {
        console.error(err);
        document.body.classList.remove('is-printing');
    });
}
