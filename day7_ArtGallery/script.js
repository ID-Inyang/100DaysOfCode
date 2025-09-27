const body = document.querySelector('body');
const section = document.querySelector('section');
const container = document.querySelector('.container');
const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll("img");

let enlargedImage;

cards.forEach(card => {
    let counter = 0;
    card.addEventListener('click', (e) => {
        counter++;
        while (counter < 2) {
            enlargedImage = card.cloneNode(true);
            console.log(section.appendChild(enlargedImage));
        }
    })
})


images.forEach(image => {
    image.style.borderStyle = 'solid';
})