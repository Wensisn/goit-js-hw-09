const refs = {
btnStart: document.querySelector('button[data-start]'),
btnStop: document.querySelector('button[data-stop]'),
body: document.querySelector('body'),
colorValSpan: document.querySelector('.color'),
}

let timerId = null;
const TIMECHANGECOLOR = 700;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const backgroundColorSwitcher = function () {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.body.style.color = getRandomHexColor();
};

refs.btnStart.addEventListener('click', () => {
  timerId = setInterval(backgroundColorSwitcher, TIMECHANGECOLOR);
  refs.btnStart.disabled = true;
});

refs.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
});

