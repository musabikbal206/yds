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
let isExamFinished = false; 
let examStartTime = null;
let currentUserTC = ""; 
let activeKeyboardInput = null;

// --- NOTES FEATURE STATE ---
let isNoteMode = false;
let currentNoteTool = 'pen'; // 'pen', 'text', 'eraser'
let currentNoteColor = '#dc3545'; // Default red
let noteData = {}; // Stores notes per question index { 0: { body: "dataUrl", split: "dataUrl" }, ... }
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentNoteSize = 3; // Default thickness
let canvasHistory = {}; // Format: { 'qIndex_canvasId': { undo: [], redo: [] } }
let lastActiveCanvas = null; // Tracks which canvas was last touched
// --- INIT ---
setInterval(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById('header-clock').innerText = timeStr;
}, 1000);

// --- NAVIGATION ---
function goInstructions() {
    document.getElementById('view-login').classList.add('hidden');
    document.getElementById('main-header-wrapper').style.display = 'flex';
    document.getElementById('view-instructions').style.display = 'flex';
}

function startExam() {
    document.getElementById('view-instructions').style.display = 'none';
    document.getElementById('view-exam').style.display = 'flex';
    
    if (!examStartTime) {
        examStartTime = Date.now(); 
    }

    const now = new Date(examStartTime);
    const end = new Date(examStartTime + 180 * 60000); 
    document.getElementById('stat-start').innerText = now.getHours() + ":" + String(now.getMinutes()).padStart(2,'0');
    document.getElementById('stat-end').innerText = end.getHours() + ":" + String(end.getMinutes()).padStart(2,'0');

    if (!timerRunning) {
        timerRunning = true;
        timerInt = setInterval(tick, 1000);
    }
    
    saveExamState();
    renderQuestion();
}

// --- EXAM LOGIC ---
function verifyAndFinishExam() {
    const inputTC = document.getElementById('finish-tc-input').value.trim();
    
    if (inputTC === "") {
        alert("Lütfen T.C. Kimlik veya Y.U. numaranızı giriniz.");
        return;
    }

    if (!currentUserTC || currentUserTC === "ÖĞRENCİ" || currentUserTC === "Misafir Aday" || currentUserTC === "") {
        currentUserTC = inputTC; 
    }

    if (inputTC !== currentUserTC) {
        alert("Hata: Girdiğiniz numara, giriş yaptığınız numara ile eşleşmiyor!");
        document.getElementById('finish-tc-input').value = "";
        return;
    }

    hideKeyboard();
    closeModal('modal-finish');
    finishExamProcess();
}

function finishExamProcess() {
    clearInterval(timerInt);
    timerRunning = false;
    isExamFinished = true;
    
    // Disable Note Mode if active
    if (isNoteMode) toggleNoteMode();

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

    const scoreStr = (correct * 1.25).toFixed(2);
    saveExamState();
    populateResultsView(total, correct, wrong, empty, scoreStr);

    document.getElementById('main-header-wrapper').style.display = 'none'; 
    document.getElementById('view-exam').style.display = 'none';
    document.getElementById('view-results').style.display = 'flex';
    
    window.scrollTo(0,0);
}

function populateResultsView(total, correct, wrong, empty, score) {
    document.getElementById('res-total').innerText = total;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-empty').innerText = empty;
    document.getElementById('res-score').innerText = score;

    const tbody = document.getElementById('res-detail-body');
    tbody.innerHTML = ''; 

    questions.forEach((q, idx) => {
        const userAns = userAnswers[idx] || ""; 
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

// --- RENDER ---
function renderQuestion() {
    // If note mode is active, save current canvas state before rendering new question
    if (isNoteMode) {
        saveNotesToMemory();
        // Temporarily turn off note mode visually during render, then re-enable
        // Actually, best to keep mode but re-init canvas. 
    }

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

    let processedText = processText(q.text, q); 
    processedText = processDynamicText(processedText, q, false); 

    let processedPara = q.paragraph ? processText(q.paragraph, q) : "";
    
    if (q.paragraph) {
        processedPara = processDynamicText(processedPara, q, true);
        const qId = q.id || (currentQIndex + 1);
        const regexHighlight = new RegExp(`\\(${qId}\\)(?:\\s*-*)`);
        processedPara = processedPara.replace(regexHighlight, 
            `<span style="color: #dc3545; font-weight: bold;">$&</span>`
        );
    }

    const explanationHTML = isExamFinished && q.explanation ? `
        <div class="explanation-box visible">
                <span style="font-weight:700; color:#28a745; display:block; margin-bottom:10px;">ÇÖZÜM ANALİZİ</span>
                ${q.explanation}
        </div>
    ` : '';

    // NOTE: Added IDs to containers to target them for canvas injection
    if (q.type === 'A') {
        card.innerHTML = `
            ${sidebarHTML}
            <div class="q-body" id="q-body-container">
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
                <div class="split-left-pane" id="q-split-left">
                    <div class="q-instruction" style="margin-bottom:15px;">${q.instruction}</div>
                    <p>${processedPara}</p>
                </div>
                <div class="split-right-pane">
                        <div style="display:flex; height:100%;">
                        ${sidebarHTML}
                        <div class="q-body" id="q-split-right" style="padding: 40px 0 0 0;">
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

    // --- RE-INIT NOTES IF MODE IS ON ---
    // Even if mode is off, we might want to inject canvases (hidden) if we want persistent view.
    // But for performance, let's only inject if note mode is active OR if we have saved notes to display.
    // Actually, to display saved notes, we must inject canvas.
    setTimeout(() => {
        initNoteCanvases();
    }, 50); // Small delay to ensure DOM is rendered and sizing is correct
}

function processText(text, q) {
    if (!text) return "";
    if (!isExamFinished || !q.dict) return text;
    let processed = text;
    Object.keys(q.dict).forEach(word => {
        const meaning = q.dict[word];
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        processed = processed.replace(regex, `<span class="dict-word" data-meaning="${meaning}">$1</span>`);
    });
    return processed;
}

function processDynamicText(text, q, isParagraph) {
    if (!text) return "";
    const qId = q.id || (currentQIndex + 1);
    const userAnsKey = userAnswers[currentQIndex];
    if (!userAnsKey) return text;

    const answerText = q.options[userAnsKey];

    if (isParagraph && qId >= 17 && qId <= 26) {
        const regexCloze = new RegExp(`\\(${qId}\\)(?:-*)`);
        if (regexCloze.test(text)) {
            return text.replace(regexCloze, `(${qId}) <span class="filled-blank">${answerText}</span>`);
        }
    }

    if (!isParagraph) {
        const regexBlank = /-{3,}|_{3,}|\.{3,}/g;
        const matches = text.match(regexBlank);
        const isMultiBlank = answerText.includes(' / ') && matches && matches.length > 1;

        if (isMultiBlank) {
            const parts = answerText.split(' / ');
            let partIndex = 0;
            return text.replace(regexBlank, () => {
                const part = parts[partIndex] || ""; 
                partIndex++;
                return `<span class="filled-blank">${part}</span>`;
            });
        } else {
            return text.replace(/-{3,}|_{3,}|\.{3,}/, `<span class="filled-blank">${answerText}</span>`);
        }
    }
    return text;
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
    // If Text tool is active, prevent answering by clicking option
    if (isNoteMode && currentNoteTool === 'text') return;

    if (userAnswers[currentQIndex] === key) {
        delete userAnswers[currentQIndex];
    } else {
        userAnswers[currentQIndex] = key;
    }

    saveExamState();
    renderQuestion(); 
}

function toggleMark() {
    bookmarks[currentQIndex] = !bookmarks[currentQIndex];
    saveExamState();
    renderQuestion();
}

function nextQuestion() {
    if (currentQIndex < questions.length - 1) {
        // Save notes before moving
        if(isNoteMode) saveNotesToMemory();
        currentQIndex++;
        saveExamState();
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQIndex > 0) {
        // Save notes before moving
        if(isNoteMode) saveNotesToMemory();
        currentQIndex--;
        saveExamState();
        renderQuestion();
    }
}

// --- TIMER ---
function tick() {
    timeLeft--;
    if (timeLeft < 0) { 
        timeLeft = 0;
        finishExamProcess(); 
        return; 
    } 
    if (timeLeft % 5 === 0) {
        saveExamState();
    }
    const m = Math.floor(timeLeft / 60).toString().padStart(2,'0');
    const s = (timeLeft % 60).toString().padStart(2,'0');
    document.getElementById('header-timer').innerText = `${m}:${s}`;
    
    const totalSeconds = 180 * 60;
    const elapsed = totalSeconds - timeLeft;

    const elStat = document.getElementById('stat-elapsed');
    if (elStat) {
        elStat.innerText = Math.floor(elapsed/60) + " dk " + (elapsed%60) + " sn";
    }
    const leftStat = document.getElementById('stat-left');
    if (leftStat) {
        leftStat.innerText = m + " dk " + s + " sn";
    }
    const avgStat = document.getElementById('stat-avg');
    if (avgStat) {
        const count = Object.keys(userAnswers).length;
        if (count > 0) {
            const avgSec = elapsed / count;
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
    const totalSeconds = 180 * 60; 
    const elapsedSeconds = totalSeconds - timeLeft;
    let avgText = "0 sn"; 
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
    const avgEl = document.getElementById('stat-avg');
    if (avgEl) avgEl.innerText = avgText;
}

function openReviewModal() {
    // Save notes if active
    if(isNoteMode) saveNotesToMemory();
    
    openModal('modal-review');
    const btnResults = document.getElementById('btn-back-results');
    if (btnResults) {
        if (isExamFinished) {
            btnResults.classList.remove('hidden');
        } else {
            btnResults.classList.add('hidden');
        }
    }
    filterReview('all', document.querySelector('.rev-btn.active'));
}

function backToResults() {
    closeModal('modal-review');
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
    const scoreStr = (correct * 1.25).toFixed(2);
    populateResultsView(total, correct, wrong, empty, scoreStr);
    document.getElementById('view-exam').style.display = 'none';
    document.getElementById('main-header-wrapper').style.display = 'none'; 
    document.getElementById('view-results').style.display = 'flex';
    window.scrollTo(0, 0);
}

function filterReview(type, btn) {
    document.querySelectorAll('.rev-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    const grid = document.getElementById('rev-grid-container');
    grid.innerHTML = '';
    for(let i=0; i<80; i++) {
        let qIdx = questions.findIndex(q => q.id === (i + 1));
        if (qIdx === -1 && questions[i]) {
            qIdx = i;
        }
        const hasData = qIdx !== -1; 
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
            if (isExamFinished && hasData) {
                if (userAnswer === questions[qIdx].correct) {
                    cell.classList.add('is-correct');
                } else if (userAnswer) { 
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
                };
                cell.style.cursor = "pointer"; 
            } else {
                cell.style.opacity = '0.5';
                cell.style.cursor = "default";
            }
            grid.appendChild(cell);
        }
    }
}

function resizeFont(dir) {
    fontSz += dir;
    if (fontSz < 12) fontSz = 12;
    if (fontSz > 40) fontSz = 40; 
    document.documentElement.style.setProperty('--question-font-size', fontSz + "px");
    document.getElementById('font-disp').innerText = fontSz;
    // Re-render canvases as size changes might shift text
    setTimeout(renderQuestion, 100); 
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

// --- NOTE TAKING & DRAWING FEATURE --- //

function toggleNoteMode() {
    isNoteMode = !isNoteMode;
    const btn = document.getElementById('btn-toggle-notes');
    const toolbar = document.getElementById('note-toolbar');

    if (isNoteMode) {
        btn.classList.add('active-action'); // You can style this class
        toolbar.classList.remove('hidden');
        document.body.classList.add('note-mode-active'); // To change cursor
    } else {
        saveNotesToMemory(); // Save before closing
        btn.classList.remove('active-action');
        toolbar.classList.add('hidden');
        document.body.classList.remove('note-mode-active');
    }
    
    // Refresh canvases to update pointer-events
    initNoteCanvases();
}

function setNoteTool(tool) {
    currentNoteTool = tool;
    // Update UI
    document.querySelectorAll('.nt-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('nt-' + tool).classList.add('active');
}

function setNoteColor(color, el) {
    currentNoteColor = color;
    document.querySelectorAll('.nt-color').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
}

function setNoteSize(size) {
    currentNoteSize = parseInt(size);
}

function clearCurrentNotes() {
    if (!confirm("Bu sorudaki tüm notları silmek istediğinize emin misiniz?")) return;
    
    const canvases = document.querySelectorAll('.note-canvas');
    canvases.forEach(canvas => {
        // NEW: Save state before clearing
        saveCanvasState(canvas);
        lastActiveCanvas = canvas; // Mark as active so we can undo immediately

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    
    if (noteData[currentQIndex]) delete noteData[currentQIndex];
    saveExamState();
}

function initNoteCanvases() {
    // Targets: #q-body-container (Type A) OR #q-split-left and #q-split-right (Type B)
    const containers = [];
    const c1 = document.getElementById('q-body-container');
    if (c1) containers.push({ id: 'main', el: c1 });

    const c2 = document.getElementById('q-split-left');
    if (c2) containers.push({ id: 'left', el: c2 });

    const c3 = document.getElementById('q-split-right');
    if (c3) containers.push({ id: 'right', el: c3 });

    containers.forEach(item => {
        let canvas = item.el.querySelector('.note-canvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.className = 'note-canvas';
            // Set z-index high. Pointer events handled by CSS class .note-mode-active
            item.el.style.position = 'relative'; // Ensure parent is relative
            item.el.appendChild(canvas);
            
            // Add Events
            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseout', stopDrawing);
            
            // Touch support
            canvas.addEventListener('touchstart', (e) => {
                const touch = e.touches[0];
                const mouseEvent = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            });
            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault(); // Stop scroll
                const touch = e.touches[0];
                const mouseEvent = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            });
            canvas.addEventListener('touchend', () => {
                const mouseEvent = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(mouseEvent);
            });

            // Click for Text Tool
            canvas.addEventListener('click', handleTextClick);
        }

        // Resize Canvas to match Scroll Height (important for scrolling content)
        // We use scrollHeight to cover the entire readable area
        const w = item.el.offsetWidth;
        const h = item.el.scrollHeight;
        
        // Only resize if different to avoid clearing context
        if (canvas.width !== w || canvas.height !== h) {
            // Save existing content if resizing (e.g. window resize)
            const mem = canvas.toDataURL();
            canvas.width = w;
            canvas.height = h;
            restoreCanvas(canvas, mem); 
        } else {
             // If size matches, check if we need to load from memory (first render)
             if (noteData[currentQIndex] && noteData[currentQIndex][item.id]) {
                 restoreCanvas(canvas, noteData[currentQIndex][item.id]);
             }
        }
        
        // Set CSS based on Mode
        if (isNoteMode) {
            canvas.style.pointerEvents = 'auto';
        } else {
            canvas.style.pointerEvents = 'none';
        }
    });
}

// Draw Functions
function startDrawing(e) {
    if (currentNoteTool === 'text') return; 
    isDrawing = true;
    
    // NEW: Track active canvas and save state before drawing starts
    lastActiveCanvas = e.target;
    saveCanvasState(e.target);

    const { x, y } = getPos(e);
    lastX = x;
    lastY = y;
}

function draw(e) {
    if (!isDrawing) return;
    if (currentNoteTool === 'text') return;

    const ctx = e.target.getContext('2d');
    const { x, y } = getPos(e);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (currentNoteTool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        // Eraser is usually comfortable being slightly larger than the pen setting, 
        // but we can just use the slider value directly or multiply it (e.g., * 2)
        ctx.lineWidth = currentNoteSize * 2; 
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = currentNoteColor;
        ctx.lineWidth = currentNoteSize;
    }

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
}

function stopDrawing() {
    isDrawing = false;
}

function getPos(e) {
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

// Text Tool Functions
function handleTextClick(e) {
    if (currentNoteTool !== 'text') return;
    
    const canvas = e.target;
    
    // NEW: Track active canvas
    lastActiveCanvas = canvas;

    const { x, y } = getPos(e);
    
    const input = document.createElement('input');
    // ... (existing input styles remain the same) ...
    input.type = 'text';
    input.style.position = 'absolute';
    input.style.left = x + 'px';
    input.style.top = y + 'px';
    input.style.border = '1px solid ' + currentNoteColor;
    input.style.color = currentNoteColor;
    input.style.background = 'transparent';
    input.style.font = '16px sans-serif';
    input.style.zIndex = 1000;
    input.style.minWidth = '100px';
    
    canvas.parentNode.appendChild(input);
    input.focus();
    
    input.addEventListener('blur', function() {
        const text = this.value;
        if (text) {
            // NEW: Save state before writing text
            saveCanvasState(canvas);

            const ctx = canvas.getContext('2d');
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = currentNoteColor;
            ctx.font = '16px sans-serif';
            ctx.fillText(text, x, y + 14);
            
            // Save to memory after writing
            saveNotesToMemory();
        }
        this.remove();
    });
    
    input.addEventListener('keydown', function(k) {
        if (k.key === 'Enter') this.blur();
    });
}

function saveNotesToMemory() {
    const containers = [
        { id: 'main', elId: 'q-body-container' },
        { id: 'left', elId: 'q-split-left' },
        { id: 'right', elId: 'q-split-right' }
    ];
    
    let qNotes = {};
    let hasNotes = false;

    containers.forEach(item => {
        const el = document.getElementById(item.elId);
        if (el) {
            const canvas = el.querySelector('.note-canvas');
            if (canvas) {
                // Check if empty? difficult without heavy calculation. 
                // We just save. DataURL is string.
                qNotes[item.id] = canvas.toDataURL();
                hasNotes = true;
            }
        }
    });

    if (hasNotes) {
        noteData[currentQIndex] = qNotes;
        saveExamState();
    }
}

function restoreCanvas(canvas, dataUrl) {
    if (!dataUrl) return;
    const img = new Image();
    img.onload = function() {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    };
    img.src = dataUrl;
}

// --- UNDO / REDO LOGIC ---

function getHistoryKey(canvas) {
    // Generate a unique key for the specific canvas (Question Index + Parent ID)
    const containerId = canvas.parentElement.id; 
    return `${currentQIndex}_${containerId}`;
}

function saveCanvasState(canvas) {
    const key = getHistoryKey(canvas);
    if (!canvasHistory[key]) {
        canvasHistory[key] = { undo: [], redo: [] };
    }
    
    // Push current state to Undo stack
    // Limit stack size to 20 to prevent memory issues
    if (canvasHistory[key].undo.length > 20) {
        canvasHistory[key].undo.shift();
    }
    canvasHistory[key].undo.push(canvas.toDataURL());
    
    // Clear Redo stack whenever a new action is performed
    canvasHistory[key].redo = [];
}

function undoLastAction() {
    if (!lastActiveCanvas) return; // No canvas selected yet
    
    const key = getHistoryKey(lastActiveCanvas);
    if (!canvasHistory[key] || canvasHistory[key].undo.length === 0) return;

    // Save current state to Redo stack before undoing
    canvasHistory[key].redo.push(lastActiveCanvas.toDataURL());

    // Restore previous state
    const prevData = canvasHistory[key].undo.pop();
    restoreCanvas(lastActiveCanvas, prevData);
    
    // Trigger save to main memory so it persists if we change questions
    saveNotesToMemory();
}

function redoLastAction() {
    if (!lastActiveCanvas) return;

    const key = getHistoryKey(lastActiveCanvas);
    if (!canvasHistory[key] || canvasHistory[key].redo.length === 0) return;

    // Save current state to Undo stack before redoing
    canvasHistory[key].undo.push(lastActiveCanvas.toDataURL());

    // Restore redo state
    const nextData = canvasHistory[key].redo.pop();
    restoreCanvas(lastActiveCanvas, nextData);
    
    saveNotesToMemory();
}

// --- HIGHLIGHTER LOGIC (Mobile & Desktop) --- //
// Modified to ignore when Drawing
function handleHighlight() {
    if (isNoteMode && currentNoteTool !== 'text') return; // Disable highlighter in draw mode

    const selection = window.getSelection();
    const text = selection.toString();

    if (text.length > 0) {
        let node = selection.anchorNode;
        let isInsideQuestion = false;
        
        while (node && node.nodeType === 1) { 
            if (node.classList.contains('q-body') || node.classList.contains('split-left-pane')) {
                isInsideQuestion = true;
                break;
            }
            node = node.parentNode;
        }
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
                if (range.commonAncestorContainer.parentNode.classList.contains('user-highlight')) return;
                const span = document.createElement('span');
                span.className = 'user-highlight';
                range.surroundContents(span);
                selection.removeAllRanges(); 
            } catch (e) {
                console.log("Cannot highlight across different blocks.");
            }
        }
    }
}
document.addEventListener('mouseup', handleHighlight);
document.addEventListener('touchend', function() {
    setTimeout(handleHighlight, 50);
});
document.addEventListener('contextmenu', function(e) {
    if (e.target.classList.contains('user-highlight')) {
        e.preventDefault(); 
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

let generatedCaptcha = "";
window.addEventListener('load', () => {
    refreshCaptcha();
    loadExamState();
});

function refreshCaptcha() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    generatedCaptcha = result;
    document.getElementById('captcha-display').innerText = result;
    document.getElementById('captcha-input').value = "";
}

function playCaptchaSound() {
    alert("Captcha code: " + generatedCaptcha.split('').join(' '));
}

function validateLogin() {
    const tcInput = document.getElementById('tc-input').value.trim();
    const captchaInput = document.getElementById('captcha-input').value.trim();
    if (captchaInput !== generatedCaptcha) {
        alert("Hata: Girdiğiniz güvenlik kodu yanlış! Lütfen tekrar deneyiniz.");
        refreshCaptcha();
        return;
    }
    if (!checkTC(tcInput)) {
        alert("Hata: Geçersiz T.C. Kimlik Numarası girdiniz.");
        return;
    }
    document.querySelector('.user-id-text').innerText = tcInput;
    currentUserTC = tcInput; 
    goInstructions(); 
}

function checkTC(value) {
    value = value.toString();
    const isEleven = /^[1-9]{1}[0-9]{9}[02468]{1}$/.test(value);
    if (!isEleven) return false;
    let digits = value.split('').map(Number);
    let oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    let evenSum = digits[1] + digits[3] + digits[5] + digits[7];
    let digit10 = ((oddSum * 7) - evenSum) % 10;
    if (digit10 < 0) digit10 += 10; 
    if (digit10 !== digits[9]) return false;
    let sumFirst10 = 0;
    for (let i = 0; i < 10; i++) sumFirst10 += digits[i];
    if ((sumFirst10 % 10) !== digits[10]) return false;
    return true;
}

function saveExamState() {
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
        userId: currentIdText,
        noteData: noteData // Save notes
    };
    localStorage.setItem('elt_exam_state', JSON.stringify(state));
}

function loadExamState() {
    const savedJSON = localStorage.getItem('elt_exam_state');
    if (!savedJSON) return;

    const state = JSON.parse(savedJSON);

    currentQIndex = state.currentQIndex || 0;
    userAnswers = state.userAnswers || {};
    bookmarks = state.bookmarks || {};
    isExamFinished = state.isExamFinished || false;
    currentLang = state.currentLang || 'tr';
    fontSz = state.fontSz || 16;
    examStartTime = state.startTime || null; 
    noteData = state.noteData || {}; // Load notes

    const langBtn = document.querySelector(`.lang-opt[onclick*="'${currentLang}'"]`);
    if (langBtn) changeLang(currentLang, langBtn);
    document.documentElement.style.setProperty('--question-font-size', fontSz + "px");
    document.getElementById('font-disp').innerText = fontSz;

    if (state.isInExam && !isExamFinished && examStartTime) {
        const totalDurationSeconds = 180 * 60; 
        const now = Date.now();
        const secondsPassed = Math.floor((now - examStartTime) / 1000);
        timeLeft = totalDurationSeconds - secondsPassed;
        if (timeLeft <= 0) {
            timeLeft = 0;
            document.getElementById('view-login').classList.add('hidden');
            document.getElementById('main-header-wrapper').style.display = 'flex';
            document.getElementById('view-exam').style.display = 'flex';
            alert("Süre Doldu! Sınav süresi siz yokken sona erdi."); 
            finishExamProcess(); 
            return; 
        }
    } else {
        timeLeft = 180 * 60;
    }

    if (state.isInExam || isExamFinished) {
        document.getElementById('view-login').classList.add('hidden');
        document.getElementById('main-header-wrapper').style.display = 'flex';
        document.getElementById('view-instructions').style.display = 'none';
        document.getElementById('view-exam').style.display = 'flex';

        if (state.userId) {
            document.querySelector('.user-id-text').innerText = state.userId;
            currentUserTC = state.userId; 
        } else {
            document.querySelector('.user-id-text').innerText = "ÖĞRENCİ";
        }

        if (examStartTime) {
            const startDate = new Date(examStartTime);
            const endDate = new Date(examStartTime + 180 * 60000);
            document.getElementById('stat-start').innerText = startDate.getHours() + ":" + String(startDate.getMinutes()).padStart(2,'0');
            document.getElementById('stat-end').innerText = endDate.getHours() + ":" + String(endDate.getMinutes()).padStart(2,'0');
        }

        updateFinishButton();
        renderQuestion();
        // Init canvases if in exam view to show saved notes
        setTimeout(initNoteCanvases, 100);

        if (!isExamFinished && timeLeft > 0) {
            timerRunning = true;
            timerInt = setInterval(tick, 1000);
        }
    }
}

function clearExamState() {
    localStorage.removeItem('elt_exam_state');
}

function updateFinishButton() {
    const btn = document.getElementById('action-finish');
    if (!btn) return;
    const span = btn.querySelector('span');
    if (isExamFinished) {
        span.innerText = translations[currentLang].exitReview;
        span.setAttribute('data-key', 'exitReview');
        btn.onclick = exitReview; 
    } else {
        span.innerText = translations[currentLang].finish;
        span.setAttribute('data-key', 'finish');
        btn.onclick = () => openModal('modal-finish');
    }
}

function exitReview() {
    if (confirm("İncelemeyi bitirip ana menüye dönmek istediğinize emin misiniz?")) {
        if (typeof clearExamState === 'function') {
            clearExamState(); 
        } else {
            localStorage.removeItem('elt_exam_state');
        }
        location.reload();
    }
}

function toggleLocalLangMenu() {
    const menu = document.getElementById('lang-custom-menu');
    menu.classList.toggle('show');
}
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.lang-wrapper-relative');
    if (wrapper && !wrapper.contains(e.target)) {
        document.getElementById('lang-custom-menu').classList.remove('show');
    }
});
function selectLocalLang(code, text, el) {
    document.getElementById('lang-display-text').innerText = text;
    document.querySelectorAll('.lang-custom-option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    const dummyBtn = document.querySelector(`.lang-opt[onclick*="'${code}'"]`); 
    changeLang(code, dummyBtn || document.createElement('div'));
    document.getElementById('lang-custom-menu').classList.remove('show');
}

function toggleTestMenu() {
    const menu = document.getElementById('test-custom-menu');
    document.getElementById('lang-custom-menu').classList.remove('show');
    menu.classList.toggle('show');
}
document.addEventListener('click', function(e) {
    const langWrapper = document.querySelector('.lang-wrapper-relative');
    if (langWrapper && !langWrapper.contains(e.target)) {
        document.getElementById('lang-custom-menu').classList.remove('show');
    }
    const testWrapper = document.querySelector('.test-dropdown-wrapper');
    if (testWrapper && !testWrapper.contains(e.target)) {
        document.getElementById('test-custom-menu').classList.remove('show');
    }
});

function showKeyboard(inputElement) {
    activeKeyboardInput = inputElement;
    document.getElementById('virtual-keyboard').classList.add('active');
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
function vkType(num) {
    if (activeKeyboardInput) {
        if (activeKeyboardInput.value.length < 11) {
             activeKeyboardInput.value += num;
        }
    }
}
function vkBack() {
    if (activeKeyboardInput && activeKeyboardInput.value.length > 0) {
        activeKeyboardInput.value = activeKeyboardInput.value.slice(0, -1);
    }
}
function vkClear() {
    if (activeKeyboardInput) {
        activeKeyboardInput.value = "";
    }
}
document.addEventListener('click', function(e) {
    const kb = document.getElementById('virtual-keyboard');
    const isInput = e.target.tagName === 'INPUT' && e.target.type === 'text';
    const clickedKb = kb.contains(e.target);
    if (!isInput && !clickedKb && kb.classList.contains('active')) {
        hideKeyboard();
    }
});

function startReview() {
    document.getElementById('view-results').style.display = 'none';
    document.getElementById('view-exam').style.display = 'flex';
    document.getElementById('main-header-wrapper').style.display = 'flex'; 
    currentQIndex = 0;
    renderQuestion();
    updateFinishButton(); 
}

function downloadPDF() {
    const element = document.querySelector('.res-container');
    const dateStr = new Date().toISOString().slice(0,10);
    const userId = currentUserTC || "Candidate";
    const filename = `ExamResult_${userId}_${dateStr}.pdf`;
    const opt = {
        margin:       [10, 10, 10, 10], 
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] } 
    };
    document.body.classList.add('is-printing');
    html2pdf().set(opt).from(element).save().then(() => {
        document.body.classList.remove('is-printing');
    }).catch(err => {
        console.error(err);
        document.body.classList.remove('is-printing');
    });
}