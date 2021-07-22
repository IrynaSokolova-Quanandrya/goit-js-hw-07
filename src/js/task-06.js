

const inputValidEl = document.querySelector('#validation-input');
console.log(inputValidEl);
const dataLength = Number (inputValidEl.dataset.length);

inputValidEl.addEventListener('blur', inputLengthLimiter);

function inputLengthLimiter () {
    const inputLength = inputValidEl.value.length;
    
    inputLength === dataLength ? inputValidEl.className = 'valid' : inputValidEl.className = 'invalid'; 
};

/*Done */






