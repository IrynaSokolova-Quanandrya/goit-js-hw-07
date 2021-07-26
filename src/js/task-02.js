const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const parentElem = document.querySelector('#ingredients');

const ingredient =  ingredients.map(elem => {
  const ingredient = document.createElement('li');
  ingredient.textContent = elem;
  return ingredient;
 
})
 parentElem.append(...ingredient);

/*Done*/
