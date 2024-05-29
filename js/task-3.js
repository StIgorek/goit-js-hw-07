
const inputRef = document.getElementById('name-input');
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener('input', onInputChange);
function onInputChange(event) {
  outputRef.textContent = event.target.value.trim()
    ? event.target.value.trim() : 'Anonymous';
};