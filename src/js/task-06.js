

const inputValidEl = document.querySelector('#validation-input');
console.log(inputValidEl);

inputValidEl.addEventListener('blur', () => {
    const inputLength = inputValidEl.value.length;
    const dataLength = Number (inputValidEl.dataset.length)
inputLength <= dataLength ? inputValidEl.className = 'valid' : inputValidEl.className = 'invalid'; 
})

/*Done */






