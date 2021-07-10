const inputEl = document.querySelector('#validation-input');
const lengthEl = document.querySelector('input[data-length="6"]');


const dataLength = lengthEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    // console.log(`количество символов: ${inputEl.value.length}`);
    if (inputEl.value.length === +dataLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
}