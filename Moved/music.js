const audio = new Audio('/Moved/music.mp3');
audio.loop = true;
const musicButton = document.getElementById('musicButton');

let isPlaying = false;

musicButton.addEventListener('click', function() {
    if (isPlaying) {
        // Pause the music
        audio.pause();
        musicButton.textContent = '♪';
        isPlaying = false;
    } else {
        // Play the music
        audio.play().catch(function(error) {
            console.log('Error playing audio:', error);
        });
        musicButton.textContent = '❚❚';
        isPlaying = true;
    }
});

audio.addEventListener('ended', function() {
    musicButton.textContent = '♪';
    isPlaying = false;
});