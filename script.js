// キーボード配列のマッピング
const keyboardLayout = {
    'q': 'q', 'u': 'u', 'o': 'o', ',': ',', '.': '.',
    'g': 'g', 'j': 'j', 'd': 'd', 'b': 'b', 'p': 'p', '/': '/',
    'e': 'e', 'a': 'a', 'i': 'i', 'f': 'f', '-': '-',
    'k': 'k', 's': 's', 't': 't', 'n': 'n', 'h': 'h',
    'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v',
    'm': 'm', 'y': 'y', 'r': 'r', 'w': 'w', 'l': 'l',
    ' ': ' '
};

const textDisplay = document.getElementById('textDisplay');
const targetText = textDisplay.textContent.trim();
const inputField = document.getElementById('inputField');
const charCount = document.getElementById('charCount');
const totalCount = document.getElementById('totalCount');
const progressFill = document.getElementById('progressFill');
const keys = document.querySelectorAll('.key[data-char]');

let currentIndex = 0;

// ローマ字テキストを span でラップ
function initializeTextDisplay() {
    const chars = targetText.split('');
    const spanText = chars.map(char => 
        `<span class="pending" data-char="${char}">${char}</span>`
    ).join('');
    textDisplay.innerHTML = spanText;
}

// 初期化
initializeTextDisplay();
totalCount.textContent = targetText.length;

// キーボード入力イベント
inputField.addEventListener('input', function(e) {
    const inputValue = e.target.value;
    currentIndex = inputValue.length;
    
    // プログレスバー更新
    const progress = (currentIndex / targetText.length) * 100;
    progressFill.style.width = progress + '%';
    charCount.textContent = currentIndex;

    // テキスト色の更新
    updateTextDisplay(inputValue);

    // キーのハイライト処理
    updateKeyHighlight(inputValue);

    // 完了判定
    if (inputValue === targetText) {
        showCompletion();
    }
});

// テキスト表示の色を更新
function updateTextDisplay(inputValue) {
    const spans = textDisplay.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (index < inputValue.length) {
            // 入力済みの文字
            span.classList.remove('pending', 'current');
            span.classList.add('completed');
        } else if (index === inputValue.length) {
            // 次に入力する文字
            span.classList.remove('pending', 'completed');
            span.classList.add('current');
        } else {
            // まだ入力していない文字
            span.classList.remove('completed', 'current');
            span.classList.add('pending');
        }
    });
}

// キーボード入力でキーをハイライト
document.addEventListener('keydown', function(e) {
    const char = e.key.toLowerCase();
    if (keyboardLayout[char]) {
        highlightKey(char, 'active');
    }
});

document.addEventListener('keyup', function(e) {
    const char = e.key.toLowerCase();
    if (keyboardLayout[char]) {
        removeKeyHighlight(char, 'active');
    }
});

// キーのハイライト更新
function updateKeyHighlight(inputValue) {
    // すべてのキーをリセット
    keys.forEach(key => {
        key.classList.remove('correct', 'error');
    });

    // 入力済みの部分をマーク
    for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        const targetChar = targetText[i];
        
        if (char === targetChar) {
            highlightKeyByChar(char, 'correct');
        } else {
            highlightKeyByChar(char, 'error');
            break;
        }
    }
}

// 文字からキーを検索してハイライト
function highlightKey(char, className) {
    const key = document.querySelector(`.key[data-char="${char}"]`);
    if (key) {
        key.classList.add(className);
    }
}

function highlightKeyByChar(char, className) {
    const key = document.querySelector(`.key[data-char="${char}"]`);
    if (key && !key.classList.contains('correct') && !key.classList.contains('error')) {
        key.classList.add(className);
    }
}

function removeKeyHighlight(char, className) {
    const key = document.querySelector(`.key[data-char="${char}"]`);
    if (key) {
        key.classList.remove(className);
    }
}

// 完了画面
function showCompletion() {
    setTimeout(() => {
        alert('🎉 完成！おめでとうございます！\n\nNew配列のタイピング練習が完了しました。');
        
        // 入力フィールドとプログレスをリセット
        inputField.value = '';
        progressFill.style.width = '0%';
        charCount.textContent = '0';
        keys.forEach(key => key.classList.remove('correct', 'error'));
        initializeTextDisplay();
        inputField.focus();
    }, 300);
}
