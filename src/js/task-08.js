const inputNumberEl = document.querySelector('div > input');
const btnCreate = document.querySelector('button[data-action="render"]');
const btnClear = document.querySelector('button[data-action="destroy"]');
const boxCollectionContainerEl = document.querySelector('#boxes');



let boxSize = 30;

btnCreate.addEventListener('click', () => createBoxes(inputNumberEl.value));
btnClear.addEventListener('click', destroyBoxes);
    
function createBoxes(amount) {
    const boxesArr = [];
    for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        boxEl.style.width = boxSize + 'px';
        boxEl.style.height = boxSize + 'px';
        boxSize += 10;
    boxesArr.push(boxEl);
    }
    boxCollectionContainerEl.append(...boxesArr);
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function destroyBoxes() {
    boxCollectionContainerEl.innerHTML = '';
    inputNumberEl.value = '';
    boxSize = 30;
}


// ======================= вариант с доп.занятия с ментором ==============================
// const [input, createBtn, destroyBtn] = document.querySelector('#controls').children;
// console.log(input);
// console.log(createBtn);
// console.log(destroyBtn);
// let size = 30;

// const divListRef = document.querySelector('#boxes');

// createBtn.addEventListener('click', () => createBoxes(input.value));
// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//     const newArr = [];
//     for (let i = 0; i < amount; i += 1) {
//         const newDiv = document.createElement('div');
//         newDiv.style.backgroundColor = createRandom();
//         newDiv.style.width = size + 'px';
//         newDiv.style.height = size + 'px';
//         size += 10;
//         newArr.push(newDiv);
//     }
//     divListRef.append(...newArr);
// }

// function destroyBoxes() {
//     divListRef.innerHTML = '';
//     size = 30;
// }

// function createRandom() {
//   return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
//     (Math.random() * 255) << 0
//   })`;
// }
