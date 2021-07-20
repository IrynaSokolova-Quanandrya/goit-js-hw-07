/*const input = document.querySelector('#controls input');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
render.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = input.value;
    let divSize = 30;
    for (let i = 0; i < amount; i += 1){
        const newBox = document.createElement('div');
        newBox.style.width = newBox.style.height = divSize + "px";
        let color = Math.round(Math.random()*65025).toString(16);
        newBox.style.backgroundColor = '#' + color;
        boxes.appendChild(newBox);
        divSize += 10;
    }       
}
function destroyBoxes() {
    const newBoxes = boxes.children;
    [...newBoxes].forEach (elem => elem.remove())   
} */

//Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и 
//нажимает кнопку Создать, после чего рендерится коллекция. 
//При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр 
//amount - число. Функция создает столько div, сколько указано в 
//amount и добавляет их в div#boxes.

//Каждый созданный div:

 //   Имеет случайный rgb цвет фона
//    Размеры самого первого div - 30px на 30px
 //   Каждый следующий div после первого, должен быть шире и выше 
 //предыдущего на 10px

//Создай функцию destroyBoxes(), которая очищает div#boxes.

//<div id="controls">
//  <input type="number" min="0" max="100" step="1" />
//  <button type="button" data-action="render">Создать</button>
//  <button type="button" data-action="destroy">Очистить</button>
//</div>

//<div id="boxes"></div>