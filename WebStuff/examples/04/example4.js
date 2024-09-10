const button = document.getElementById('clickMe');
const message = document.getElementById('message');

button.addEventListener('click', function () {
    message.textContent = "Yes, it did!";
});

// What will the paragraph with id "message" display after the button is clicked?