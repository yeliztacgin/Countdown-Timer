// JavaScript source code

const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownE1 = document.querySelector("#countdown");
setInterval(updateCountdown, 1000);

function updateCountdown() {

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownE1.innerHTML = `${minutes}:${seconds}`;
    time--;
}
