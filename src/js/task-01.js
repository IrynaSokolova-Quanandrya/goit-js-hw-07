const totalEl = document.querySelector('#categories');
console.log(totalEl);

const quantityEl = document.querySelectorAll('.item');
console.log(`В списке ${quantityEl.length} категории`);






/*const titleEl = document.querySelectorAll('h2');
console.log(titleEl. textContent)

console.log('Категория', );


const quantityCategoryEl = document.querySelectorAll('ul>li')
console.log(quantityCategoryEl);
console.log('Количество элементов:', ); */


/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */