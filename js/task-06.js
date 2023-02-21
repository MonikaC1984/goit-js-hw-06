const textInput = document.querySelector('input');
const textLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
  if (textInput.value.length === Number(textLength)) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});
