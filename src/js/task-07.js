
const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


rangeEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget);
    textEl.style.fontSize = event.target.value + 'px';
}