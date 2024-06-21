function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const boxesRef = document.getElementById('boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', handlerCreate);
destroyBtn.addEventListener('click', handlerDestroy);

function handlerCreate() {
  const value = Number(input.value);
  if (value < 1 || value > 100) {
    alert("Ведіть число від 1 до 100");
    input.value = '';
    return;
  }
  boxesRef.innerHTML = createBoxes(value);
};

function createBoxes(amount) {
  let markup = '';
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
  }
  return markup;
}

function handlerDestroy() {
  boxesRef.innerHTML = "";
  input.value = "";
};