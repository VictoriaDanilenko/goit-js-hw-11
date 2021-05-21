const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

let startInterval = null;
btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  startInterval = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.background = colors[index];
  }, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(startInterval);
  btnStart.disabled = false;
});

