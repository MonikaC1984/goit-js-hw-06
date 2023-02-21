function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', event => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
});
