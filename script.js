function playJapanese() {
    var utterance = new SpeechSynthesisUtterance("郵便局");
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
}

function playEnglish() {
    var utterance = new SpeechSynthesisUtterance("Post office");
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}
