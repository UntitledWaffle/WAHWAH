const button = document.querySelector('#greetButton');
const nameInput = document.querySelector('#nameInput');

button.addEventListener('mouseover', ()=>{
    alert('Hello, ' + nameInput.value);
});
