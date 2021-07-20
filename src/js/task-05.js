

const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

console.log(inputEl);
console.log(nameEl);

inputEl.addEventListener('input', () => {
nameEl.textContent = inputEl.value === '' ? 'незнакомец' : inputEl.value;
})

    


/*Done */