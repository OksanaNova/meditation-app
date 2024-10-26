let timerId

const audio = document.querySelector(".myAudio");
const video = document.querySelector(".myVideo");

const playBtn = document.querySelector(".play");
playBtn.addEventListener('click', startTimer);

function startTimer() {
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    audio.play();
    video.play();
    timerId = setInterval(calculateTime, 1000);
}

const pauseBtn = document.querySelector(".pause");
pauseBtn.addEventListener('click', stopTimer);

function stopTimer() {
    pauseBtn.disabled = true;
    playBtn.disabled = false;
    audio.pause();
    video.pause();
    clearInterval(timerId);
}

const timer = 5;
let timeInSeconds = timer * 60;

function calculateTime() {

    const displayTime = document.querySelector(".displayTime");
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    displayTime.textContent = `${minutes} : ${seconds}`;
    timeInSeconds--;

    if(timeInSeconds < 0) {
        timeInSeconds = 0;
        stopTimer();
    }
}

