function playSound() {
    var utterance = new SpeechSynthesisUtterance("これはテストのための読み上げサンプルです。");
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
}
