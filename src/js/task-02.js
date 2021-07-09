const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
itemEl.textContent = ingredient;
document.querySelector('#ingredients').appendChild(itemEl);
}