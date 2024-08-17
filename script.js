function playJapanese() {
    var utterance = new SpeechSynthesisUtterance("これはテストのための読み上げサンプルです。");
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
}

function playEnglish() {
    var utterance = new SpeechSynthesisUtterance("This is a sample text for testing the speech synthesis.");
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}
