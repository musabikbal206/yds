// --- TRANSLATIONS ---
const translations = {
    tr: {
        status: "Anlık Durum",
        review: "Gözden Geçir",
        finish: "Sınavı Sonlandır",
        timeLeft: "Kalan Süre:",
        time: "Saat:",
        settings: "Ayarlar",
        close: "KAPAT",
        testInfo: "Test Bilgileri",
        testName: "Test Adı",
        totalQ: "Toplam soru sayısı",
        answeredQ: "Cevaplanmış S. Sayısı",
        remQ: "Kalan Soru Sayısı",
        timeInfo: "Anlık Süre Bilgileri",
        startTime: "Başlama saati",
        endTime: "Bitiş saati",
        duration: "Sınav süresi",
        elapsed: "Geçen süre",
        avgTime: "Soru başına ortalama süre",
        selectTest: "Test Seçiniz",
        allQ: "Tüm Sorular",
        answered: "● Cevapladıklarım",
        marked: "⚑ İşaretlediklerim",
        empty: "○ Boş Bıraktıklarım",
        finishWarning: "Sınavı bitirdiğinizde aşağıdaki kutucuğa T.C. kimlik numarası veya Y.U. numarası girerek sınavı sonlandırabilirsiniz.<br><br>Sınav sonlandırdıktan sonra tekrar sınava devam edemezsiniz. Sınavı sonlandırırsanız dahi sınavdan çıkabileceğiniz süre dolmadan salondan ayrılamazsınız.",
        finishPrompt: "Sınavı tamamlamak için T.C. Kimlik No veya YU numarasını girip onaylayınız.",
        confirm: "ONAYLA",
        changeLang: "Uygulama dilini değiştir.",
        changeFont: "Yazı büyüklüğünü değiştir",
        changeMode: "Görünüm modunu değiştir",
        lightMode: "Aydınlık Mod",
        darkMode: "Karanlık Mod",
        prevQ: "Önceki<br>soru",
        nextQ: "Sonraki<br>soru"
    },
    en: {
        status: "Status",
        review: "Review",
        finish: "Finish Exam",
        timeLeft: "Time Left:",
        time: "Time:",
        settings: "Settings",
        close: "CLOSE",
        testInfo: "Test Information",
        testName: "Test Name",
        totalQ: "Total Questions",
        answeredQ: "Answered",
        remQ: "Remaining",
        timeInfo: "Time Information",
        startTime: "Start Time",
        endTime: "End Time",
        duration: "Duration",
        elapsed: "Elapsed",
        avgTime: "Avg Time/Question",
        selectTest: "Select Test",
        allQ: "All Questions",
        answered: "● Answered",
        marked: "⚑ Marked",
        empty: "○ Unanswered",
        finishWarning: "When you finish the exam, you can terminate it by entering your T.C. Identity Number or Y.U. number in the box below.<br><br>You cannot continue the exam after terminating it. Even if you terminate the exam, you cannot leave the hall before the permitted exit time.",
        finishPrompt: "Enter your T.C. ID or YU number to confirm finishing the exam.",
        confirm: "CONFIRM",
        changeLang: "Change application language.",
        changeFont: "Change font size",
        changeMode: "Change view mode",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
        prevQ: "Previous<br>question",
        nextQ: "Next<br>question"
    },
    de: {
        status: "Status",
        review: "Überprüfen",
        finish: "Prüfung beenden",
        timeLeft: "Verbleibend:",
        time: "Zeit:",
        settings: "Einstellungen",
        close: "SCHLIESSEN",
        testInfo: "Testinformationen",
        testName: "Testname",
        totalQ: "Fragen gesamt",
        answeredQ: "Beantwortet",
        remQ: "Verbleibend",
        timeInfo: "Zeitinformationen",
        startTime: "Startzeit",
        endTime: "Endzeit",
        duration: "Dauer",
        elapsed: "Verstrichen",
        avgTime: "Ø Zeit/Frage",
        selectTest: "Test auswählen",
        allQ: "Alle Fragen",
        answered: "● Beantwortet",
        marked: "⚑ Markiert",
        empty: "○ Unbeantwortet",
        finishWarning: "Wenn Sie die Prüfung beenden, können Sie diese durch Eingabe Ihrer T.C. Identitätsnummer oder Y.U. Nummer im untenstehenden Feld abschließen.<br><br>Nach Beendigung der Prüfung können Sie diese nicht fortsetzen. Auch wenn Sie die Prüfung beenden, dürfen Sie den Saal nicht vor der erlaubten Zeit verlassen.",
        finishPrompt: "Geben Sie Ihre T.C. ID oder YU-Nummer ein, um das Beenden zu bestätigen.",
        confirm: "BESTÄTIGEN",
        changeLang: "Sprache ändern.",
        changeFont: "Schriftgröße ändern",
        changeMode: "Ansichtsmodus ändern",
        lightMode: "Heller Modus",
        darkMode: "Dunkler Modus",
        prevQ: "Vorherige<br>Frage",
        nextQ: "Nächste<br>Frage"
    }
};
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
    
    // Start Timer
    const now = new Date();
    const end = new Date(now.getTime() + 180 * 60000);
    document.getElementById('stat-start').innerText = now.getHours() + ":" + String(now.getMinutes()).padStart(2,'0');
    document.getElementById('stat-end').innerText = end.getHours() + ":" + String(end.getMinutes()).padStart(2,'0');

    if (!timerRunning) {
        timerRunning = true;
        timerInt = setInterval(tick, 1000);
    }
    renderQuestion();
}

// --- EXAM LOGIC ---
function confirmFinishExam() {
    closeModal('modal-finish');
    finishExamProcess();
}

function finishExamProcess() {
    clearInterval(timerInt);
    isExamFinished = true;
    timerRunning = false;
    
    // Calculate Score
    let correctCount = 0;
    questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) correctCount++;
    });
    let score = (correctCount * 1.25).toFixed(2);
    
    alert(`Sınav Tamamlandı!\nDoğru: ${correctCount}/${questions.length}\nPuan: ${score}`);
    
    // Re-render in Review Mode
    renderQuestion();
}

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

    // Prepare content text (with dictionary if finished)
    const processedText = processText(q.text, q);
    const processedPara = q.paragraph ? processText(q.paragraph, q) : "";
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
                    <p>${highlightGap(processedPara, q.id)}</p>
                </div>
                <div class="split-right-pane">
                        <div style="display:flex; height:100%;">
                        ${sidebarHTML}
                        <div class="q-body" style="padding: 40px 0 0 0;">
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
    userAnswers[currentQIndex] = key;
    renderQuestion();
}

function toggleMark() {
    bookmarks[currentQIndex] = !bookmarks[currentQIndex];
    renderQuestion();
}

function nextQuestion() {
    if (currentQIndex < questions.length - 1) {
        currentQIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQIndex > 0) {
        currentQIndex--;
        renderQuestion();
    }
}

// --- TIMER ---
function tick() {
    timeLeft--;
    if (timeLeft < 0) { 
        timeLeft = 0;
        finishExamProcess(); // Auto finish
    }
    
    const m = Math.floor(timeLeft / 60).toString().padStart(2,'0');
    const s = (timeLeft % 60).toString().padStart(2,'0');
    
    document.getElementById('header-timer').innerText = `${m}:${s}`;
    
    const elapsed = (180 * 60) - timeLeft;
    document.getElementById('stat-elapsed').innerText = Math.floor(elapsed/60) + " dk " + (elapsed%60) + " sn";
    document.getElementById('stat-left').innerText = m + " dk " + s + " sn";
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
}
function toggleSettings() {
    document.getElementById('settings-panel').classList.toggle('open');
}

function updateStatus() {
    const count = Object.keys(userAnswers).length;
    document.getElementById('stat-ans').innerText = count;
    document.getElementById('stat-rem').innerText = 80 - count;
}

function openReviewModal() {
    openModal('modal-review');
    filterReview('all', document.querySelector('.rev-btn.active'));
}

function filterReview(type, btn) {
    document.querySelectorAll('.rev-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    const grid = document.getElementById('rev-grid-container');
    grid.innerHTML = '';

    // ... inside filterReview function ...
    for(let i=0; i<80; i++) {
        // Calculate the actual Question ID (Grid starts at 0, Questions start at 1)
        const targetId = i + 1;
        
        // Search your 'questions' array for the object that has this ID
        const qIdx = questions.findIndex(q => q.id === targetId);

        const hasData = qIdx !== -1; 
        const userAnswer = userAnswers[qIdx];
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
            
            if (isExamFinished && hasData) {
                    if (userAnswer === questions[qIdx].correct) {
                        cell.classList.add('is-correct');
                    } else if (userAnswer) { // Only mark wrong if answered
                        cell.classList.add('is-wrong');
                    }
            } else {
                if (isAns) cell.classList.add('answered');
            }

            if (isMark) cell.classList.add('marked');
            if (isCurr) cell.classList.add('active'); 

            if (hasData) {
                cell.onclick = () => {
                    currentQIndex = qIdx;
                    renderQuestion();
                    closeModal('modal-review');
                }
            } else {
                cell.style.opacity = '0.5';
            }
            grid.appendChild(cell);
        }
    }
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
