var currentLanguage = 'ja'; // デフォルトは日本語

function playAudio() {
    if (currentLanguage === 'ja') {
        var audio = new Audio('https://github.com/NKGWsgk/SPK-illubo/raw/main/audio/0-SPK-jiten.wav');
        audio.play();
    } else if (currentLanguage === 'en') {
        var utterance = new SpeechSynthesisUtterance("Post office");
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

function toggleLanguage() {
    var button = document.getElementById('langButton');
    if (currentLanguage === 'ja') {
        currentLanguage = 'en';
        button.textContent = 'English';
    } else {
        currentLanguage = 'ja';
        button.textContent = '日本語';
    }
}
