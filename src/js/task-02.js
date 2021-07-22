const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listIngredientsEl = document.querySelector('#ingredients');
console.log(listIngredientsEl);


ingredients.forEach(
  ingredient => {
const listEl = document.createElement('li');    
listEl.innerText = ingredient;
  });

  
listIngredientsEl.append(listEl);
  console.log();


/*Done*/
