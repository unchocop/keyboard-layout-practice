* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', 'Hiragino Sans', 'Yu Gothic', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: 40px;
    max-width: 1000px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5em;
}

h2 {
    text-align: center;
    color: #555;
    margin-bottom: 20px;
    font-size: 1.5em;
}

.practice-section {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 40px;
    border: 2px solid #e0e0e0;
}

.instruction {
    font-size: 1.1em;
    color: #555;
    margin-bottom: 15px;
    font-weight: bold;
}

.japanese-text {
    background: white;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 15px;
    font-size: 1.1em;
    line-height: 1.8;
    color: #333;
    min-height: 60px;
    word-wrap: break-word;
    font-weight: 500;
}

.text-display {
    background: white;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 1.1em;
    line-height: 1.6;
    min-height: 80px;
    word-wrap: break-word;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.05em;
}

.text-display span {
    transition: color 0.1s;
}

.text-display span.completed {
    color: #999;
}

.text-display span.current {
    color: #f44336;
    font-weight: bold;
}

.text-display span.pending {
    color: #333;
}

.input-field {
    width: 100%;
    padding: 15px;
    font-size: 1.1em;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
    transition: border-color 0.3s;
    font-family: 'Courier New', monospace;
}

.input-field:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.progress-bar {
    width: 100%;
    height: 10px;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    width: 0%;
    transition: width 0.1s;
}

.progress-text {
    text-align: center;
    color: #666;
    font-size: 0.9em;
}

.keyboard-section {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 30px;
    border: 2px solid #e0e0e0;
}

.keyboard {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
}

.key-row {
    display: flex;
    gap: 6px;
    justify-content: center;
}

.key {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
    border: 2px solid #999;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.1s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    user-select: none;
}

.key:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.key.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: #5568d3;
    transform: translateY(2px);
    box-shadow: 0 2px 5px rgba(102, 126, 234, 0.4);
}

.key.correct {
    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    color: white;
    border-color: #3d8b40;
}

.key.error {
    background: linear-gradient(135deg, #f44336 0%, #da190b 100%);
    color: white;
    border-color: #c41c3b;
}

.spacer {
    width: 20px;
}

.offset-half {
    width: 25px;
}

.offset-full {
    width: 50px;
}

.space-bar {
    flex: 1;
    min-width: 200px;
    max-width: 500px;
}

@media (max-width: 768px) {
    .container {
        padding: 20px;
    }

    h1 {
        font-size: 1.8em;
    }

    .key {
        width: 40px;
        height: 40px;
        font-size: 0.8em;
    }

    .text-display,
    .japanese-text {
        font-size: 0.95em;
        padding: 15px;
    }
}
