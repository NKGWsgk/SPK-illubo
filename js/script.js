var currentLanguage = 'ja'; // デフォルトは日本語

document.getElementById('langButton').addEventListener('click', toggleLanguage);
document.getElementById('postOfficeImage').addEventListener('click', function(event) {
    playAudio();
    showClickMarker(event);
});

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

function showClickMarker(event) {
    var marker = document.createElement('div');
    marker.style.width = '20px';
    marker.style.height = '20px';
    marker.style.borderRadius = '50%';
    marker.style.background = 'rgba(0, 0, 0, 0.5)';
    marker.style.position = 'fixed'; // 'absolute' から 'fixed' に変更
    marker.style.top = event.clientY + 'px';
    marker.style.left = event.clientX + 'px';
    marker.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(marker);
    
    setTimeout(function() {
        marker.remove();
    }, 500); // 0.5秒後にマークを消す
}
