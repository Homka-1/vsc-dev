const keyOutput = document.getElementById('keyOutput');
document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    keyOutput.textContent = `${keyPressed}`;
});

let platformMoveInterval;

window.onkeydown = function(event) {
    const platform = document.querySelector('.platform');

    if (platformMoveInterval) return;

    if (event.key === 'ArrowLeft') {
        platformMoveInterval = setInterval(() => {
            if (platform.offsetLeft - 10 >= 0) {
                platform.style.left = `${platform.offsetLeft - 10}px`;
            }
        }, 15);
    } else if (event.key === 'ArrowRight') {
        platformMoveInterval = setInterval(() => {
            if (platform.offsetLeft + 10 <= window.innerWidth - platform.offsetWidth) {
                platform.style.left = `${platform.offsetLeft + 10}px`;
            }
        }, 15);
    }
};

window.onkeyup = function() {
    clearInterval(platformMoveInterval);
    platformMoveInterval = null;
};
