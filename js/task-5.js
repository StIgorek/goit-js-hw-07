
const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const bgcTextSpan = document.querySelector('.color');

buttonRef.addEventListener('click', () => {
  bgcTextSpan.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = bgcTextSpan.textContent;
});

function getRandomHexColor(click) {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
