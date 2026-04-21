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

// 日本語とローマ字のペアリング
const japaneseMappings = {
    'こ': 'ko',
    'ん': 'nn',
    'に': 'ni',
    'ち': 'ti',
    'は': 'ha',
    '、': ',',
    'こ': 'ko',
    'れ': 're',
    'が': 'ga',
    'わ': 'wa',
    'た': 'ta',
    'し': 'si',
    'の': 'no',
    'ぐ': 'gu',
    'あ': 'a',
    'え': 'e',
    'キ': 'ki',
    'ー': '-',
    'ボ': 'bo',
    'ド': 'do',
    'ハ': 'ha',
    'イ': 'i',
    'レ': 're',
    'ツ': 'tu',
    'デ': 'de',
    'ス': 'su',
    'ホ': 'ho',
    'ム': 'mu',
    'ポ': 'po',
    'ジ': 'zi',
    'ン': 'n',
    'ガ': 'ga',
    'ソ': 'so',
    'ザ': 'za',
    'イ': 'i',
    'ナ': 'na',
    'タ': 'ta',
    'メ': 'me',
    'イ': 'i',
    'マ': 'ma',
    'マ': 'ma',
    'デ': 'de',
    'ノ': 'no',
    'ハ': 'ha',
    'イ': 'i',
    'レ': 're',
    'ト': 'to',
    'ナ': 'na',
    'ラ': 'ra',
    'レ': 're',
    'イ': 'i',
    'ル': 'ru',
    'ヒ': 'hi',
    'ト': 'to',
    'ハ': 'ha',
    'カ': 'ka',
    'ナ': 'na',
    'ラ': 'ra',
    'イ': 'i',
    'ニ': 'ni',
    'ユ': 'yu',
    'リ': 'ri',
    'ョ': 'yo',
    'ク': 'ku',
    'ス': 'su',
    'ニ': 'ni',
    'ク': 'ku',
    'イ': 'i',
    'ト': 'to',
    'オ': 'o',
    'モ': 'mo',
    'イ': 'i',
    'マ': 'ma',
    'ス': 'su',
    'デ': 'de',
    'ス': 'su',
    'ガ': 'ga',
    'デ': 'de',
    'キ': 'ki',
    'ル': 'ru',
    'ダ': 'da',
    'ケ': 'ke',
    'オ': 'o',
    'ボ': 'bo',
    'エ': 'e',
    'ヤ': 'ya',
    'ス': 'su',
    'ク': 'ku',
    'シ': 'si',
    'ン': 'n',
    'プ': 'pu',
    'ル': 'ru',
    'ナ': 'na',
    'ハ': 'ha',
    'イ': 'i',
    'チ': 'ti',
    'ニ': 'ni',
    'シ': 'si',
    'タ': 'ta',
    'ノ': 'no',
    'デ': 'de',
    'ス': 'su',
    'コ': 'ko',
    'シ': 'si',
    'ツ': 'tu',
    'カ': 'ka',
    'エ': 'e',
    'バ': 'ba',
    'ス': 'su',
    'グ': 'gu',
    'ニ': 'ni',
    'ナ': 'na',
    'レ': 're',
    'ル': 'ru',
    'ハ': 'ha',
    'ズ': 'zu',
    'デ': 'de',
    'ス': 'su',
    'モ': 'mo',
    'シ': 'si',
    'キ': 'ki',
    'ョ': 'yo',
    'ウ': 'u',
    'ミ': 'mi',
    'ガ': 'ga',
    'ア': 'a',
    'レ': 're',
    'バ': 'ba',
    'ア': 'a',
    'ナ': 'na',
    'タ': 'ta',
    'ノ': 'no',
    'ピ': 'pi',
    'シ': 'si',
    'テ': 'te',
    'ミ': 'mi',
    'ル': 'ru',
    'ノ': 'no',
    'ハ': 'ha',
    'イ': 'i',
    'カ': 'ka',
    'ガ': 'ga',
    'デ': 'de',
    'ショ': 'syo',
    'ウ': 'u',
    'カ': 'ka'
};

const textDisplay = document.getElementById('textDisplay');
const mixedDisplay = document.getElementById('mixedDisplay');
const targetText = textDisplay.textContent.trim();
const inputField = document.getElementById('inputField');
const charCount = document.getElementById('charCount');
const totalCount = document.getElementById('totalCount');
const progressFill = document.getElementById('progressFill');
const keys = document.querySelectorAll('.key[data-char]');

let currentIndex = 0;

const japaneseText = 'こんにちは、これが私の考えたキーボード配列です。ホームポジションが存在しないため、今までの配列に慣れている人は、かなり入力しにくいと思います。ですが、できるだけ覚えやすく、シンプルな配置にしたため、少し使えばすぐになれるはずです。もし興味があれば、あなたのＰＣもこの配列にしてみるのはいかがでしょうか？';

// 混合表示を初期化
function initializeMixedDisplay() {
    let romajiIndex = 0;
    let html = '';
    
    for (let i = 0; i < japaneseText.length; i++) {
        const char = japaneseText[i];
        const mapping = japaneseMappings[char] || '';
        
        if (mapping) {
            // ローマ字がある場合
            const spans = mapping.split('').map(c => 
                `<span class="romaji pending" data-romaji-index="${romajiIndex++}" data-char="${c}">${c}</span>`
            ).join('');
            html += spans;
        } else {
            // 日本語のみ
            html += `<span class="japanese">${char}</span>`;
        }
    }
    
    mixedDisplay.innerHTML = html;
}

// 初期化
initializeMixedDisplay();
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
    updateMixedDisplay(inputValue);

    // キーのハイライト処理
    updateKeyHighlight(inputValue);

    // 完了判定
    if (inputValue === targetText) {
        showCompletion();
    }
});

// 混合表示の色を更新
function updateMixedDisplay(inputValue) {
    const romajiSpans = mixedDisplay.querySelectorAll('.romaji');
    romajiSpans.forEach((span, index) => {
        if (index < inputValue.length) {
            span.classList.remove('pending', 'current');
            span.classList.add('completed');
        } else if (index === inputValue.length) {
            span.classList.remove('pending', 'completed');
            span.classList.add('current');
        } else {
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
    keys.forEach(key => {
        key.classList.remove('correct', 'error');
    });

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

function showCompletion() {
    setTimeout(() => {
        alert('🎉 完成！おめでとうございます！\n\nNew配列のタイピング練習が完了しました。');
        
        inputField.value = '';
        progressFill.style.width = '0%';
        charCount.textContent = '0';
        keys.forEach(key => key.classList.remove('correct', 'error'));
        initializeMixedDisplay();
        inputField.focus();
    }, 300);
}
