 
const controlsInput = document.querySelector('#controls input')
const createDivElBtn = document.querySelector('[data-action="render"]');
console.log(createDivElBtn);
const removeDivElBtn = document.querySelector('[data-action="destroy"]');
console.log(removeDivElBtn);
const boxesEl = document.querySelector('#boxes');
console.log(boxesEl);
createDivElBtn.addEventListener('click', createBoxes);
removeDivElBtn.addEventListener('click', destroyBoxes);
  
function createBoxes () {
    const amount = controlsInput.value;
    let divSize = 30;
    for (let i = 0; i < amount; i++) {
        const divEl = document.createElement('div');
        let color = Math.round(Math.random()*65025).toString(16);
        divEl.style.backgroundColor ='#' + color;
        divEl.style.width = divEl.style.height = divSize +'px';
        boxesEl.appendChild(divEl);
        divSize += 10;
    }
     
console.log(boxesEl);
};

function destroyBoxes(){
    const newBoxes = boxesEl.children;
    [...newBoxes].forEach (elem => elem.remove());
};
 
/*Done */