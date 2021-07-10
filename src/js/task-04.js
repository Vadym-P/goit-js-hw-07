
const btnDecrEl = document.querySelector('#counter button[data-action="decrement"]');
const btnIncrEl = document.querySelector('#counter button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

function decrement() {
    valueEl.textContent = counterValue > 0 ? counterValue -= 1 : counterValue;
}

function increment() {
counterValue += 1;
valueEl.textContent = counterValue;
}
    
btnDecrEl.addEventListener('click', decrement);

btnIncrEl.addEventListener('click', increment);