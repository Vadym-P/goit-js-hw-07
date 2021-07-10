const refs = {
    input: document.querySelector('input#name-input'),
    span: document.querySelector('span#name-output'),
    
}
const spanTextDef = refs.span.textContent;
refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    refs.span.textContent = refs.input.value ? refs.input.value : spanTextDef;
}
