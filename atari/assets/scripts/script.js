//board
let board = {
    width: window.innerWidth,
    height: window.innerHeight
}

//ball
const ball = document.querySelector('.ball')

let ballArray= {
    x : board.width / 2 + 0.5,
    y : board.height / 2 + 0.5,
    dx : 1,
    dy : -2
}

//platform
const platform = document.querySelector('.platform');


function ballMove() {
    setInterval(() => {
        ball.style.left = ballArray.x + 'px'
        ball.style.bottom = ballArray.y + 'px'
        ballArray.x += ballArray.dx
        ballArray.y += ballArray.dy
        if (ballArray.y <= 0 || (ballArray.y + ball.style.height >= board.height)) {
            ballArray.dy *= -1;
        }
        if (ballArray.x <= 0 || (ballArray.x + ball.style.width >= board.width)) {
            ballArray.dx *= -1;
        }
        if (ball.style.left >= platform.style.left && ball.style.left <= platform.style.left + platform.style.width && ball.style.bottom + ball.style.height === '120px') {
            ballArray.dy *= -1;
            ballArray.dx *= -1;
        }
        if (ball.style.left === platform.style.left) {
            console.log('YEAH');
        }
    }, 2);
}




ballMove();

const keyOutput = document.getElementById('keyOutput');
document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    keyOutput.textContent = `${keyPressed}`;
});

let platformMoveInterval;

window.onkeydown = function(event) {


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
