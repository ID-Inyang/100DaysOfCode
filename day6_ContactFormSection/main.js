const button = document.getElementsByTagName('button')[0];
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const message = document.getElementById('message')


function checkInput() {
    if (!nameInput.value.trim() || !emailInput.value.trim() || !message.value.trim()) {
        alert("You can't submit an empty form!");
    } else {
        alert("Message Sent!")
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault(); 
    checkInput();
});
