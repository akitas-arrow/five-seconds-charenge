let startTime;
let isStart = false;
let timeoutId;
let timeLeft;
const holdTime = 5.00;
const timer = document.querySelector("#timer");
const btn = document.querySelector("#btn");
const score = document.querySelector("#score");
const replay = document.querySelector("#replay");
const section = document.querySelector("section");
const message = document.querySelector("#message");

const countUp = () => {
  timeLeft = Date.now() - startTime;
  timer.textContent = (timeLeft / 1000).toFixed(2);
  timeoutId = setTimeout(() => {
    countUp();
  },100)
}

const showResult = () => {
  score.textContent = `${(timeLeft / 1000).toFixed(2)}秒`;
  const timeToJudge = (timeLeft / 1000).toFixed(2);
  section.classList.remove('hidden');
  if (timeToJudge === holdTime){
    message.textContent = "すごい！"
  } else if (timeToJudge < holdTime + 0.01 && timeToJudge > holdTime - 0.01){
    message.textContent = "ニアピン！"
  }else if (timeToJudge < holdTime + 0.50 && timeToJudge > holdTime - 0.50){
    message.textContent = "おしい！"
  } else {
    message.textContent = "ぴえん。"
  }
}

const handleReplay = () => {
  section.classList.add('hidden');
  timer.textContent = '0.00'
}

const handleClick = () => {
  if(!isStart) {
    startTime = Date.now();
    countUp();
    isStart = true;
    btn.textContent = "STOP"
    timer.classList.add('hidden')
  } else {
    isStart = false;
    btn.textContent = "START"
    clearTimeout(timeoutId);
    timer.classList.remove('hidden')
    showResult()
  }
}

btn.addEventListener("click",handleClick);
replay.addEventListener("click",handleReplay);