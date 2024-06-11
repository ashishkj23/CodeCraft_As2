document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('playPause');
    const skipButton = document.getElementById('skip');
    const timerBar = document.getElementById('timer');
    const volumeSlider = document.getElementById('volume');
    const speedSlider = document.getElementById('speed');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');

    video.addEventListener('loadedmetadata', () => {
        timerBar.max = video.duration;
        durationDisplay.textContent = formatTime(video.duration);
    });

    video.addEventListener('timeupdate', () => {
        timerBar.value = video.currentTime;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
    });

    playPauseButton.addEventListener('click', () => {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    skipButton.addEventListener('click', () => {
        video.currentTime += 10;
    });

    timerBar.addEventListener('input', () => {
        video.currentTime = timerBar.value;
    });

    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value;
    });

    speedSlider.addEventListener('input', () => {
        video.playbackRate = speedSlider.value;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});
