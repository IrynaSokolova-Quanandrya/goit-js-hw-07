
const range = document.querySelector('#font-size-control');
const rangeText = document.querySelector('#text');


range.addEventListener('input', () => {
    rangeText.style.fontSize = range.value + 'px';
});

/*Done */