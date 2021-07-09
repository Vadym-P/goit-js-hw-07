const countItem = document.querySelector('#categories').children.length;
console.log(`В списке ${countItem} категории.`);

console.log('==============================');

const listItemRef = document.querySelectorAll('.item');
listItemRef.forEach(category => {
    const titleRef = category.querySelector('h2');
    console.log(`Категория: ${titleRef.textContent}`);

    const countItemEl = category.querySelectorAll('li').length;
    console.log(`Количество элементов: ${countItemEl}`);
});