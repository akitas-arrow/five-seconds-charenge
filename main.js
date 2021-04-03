let startTime;
let isStart = false;
let timeoutId;
let score;
const timer = document.querySelector("#timer")
const btn = document.querySelector("#btn");

const countUp = () => {
  const d = new Date(Date.now() - startTime);
  const s = String(d.getSeconds()).padStart(2, '0');
  const milliSeconds = d.getMilliseconds();
  const ms = String((milliSeconds / 10).toFixed()).padStart(2, '0');
  timer.textContent = `${s}.${ms}`;
  timeoutId = setTimeout(() => {
    countUp();
  },10)
}

const handleClick = () => {
  if(!isStart) {
    startTime = Date.now();
    countUp();
    isStart = true;
    btn.textContent = "STOP"
    timer.classList.remove('view')
  } else {
    isStart = false;
    btn.textContent = "START"
    clearTimeout(timeoutId);
    timer.classList.add('view')
  }
}

btn.addEventListener("click",handleClick);