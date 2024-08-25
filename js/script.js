function playJapanese() {
    var audio = new Audio('https://github.com/NKGWsgk/SPK-illubo/raw/main/audio/0-SPK-jiten.wav');
    audio.play();
}

function playEnglish() {
    var utterance = new SpeechSynthesisUtterance("Post office");
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}
