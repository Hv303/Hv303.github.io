// btn apk asli ke page apk
document.addEventListener('DOMContentLoaded', function() {
    const apkButton = document.getElementById('apk');
    
    apkButton.addEventListener('click', function() {
        window.location.href = '../page/MY PROJECT apk.html#apkh2';
    });
});
// end
// page apk ke apk my project asli
document.addEventListener('DOMContentLoaded', function() {
    const botButton = document.getElementById('bot1');
    
    botButton.addEventListener('click', function() {
        window.location.href = '../page/MY PROJECT.html#bot';
    });
});



// button apk internal area
const apkbtn = document.getElementById('apkbtn');

apkbtn.addEventListener('click', function() {
    const apk = document.getElementById('apkh2');
    apk.scrollIntoView({ behavior: 'smooth' });
});
// end
