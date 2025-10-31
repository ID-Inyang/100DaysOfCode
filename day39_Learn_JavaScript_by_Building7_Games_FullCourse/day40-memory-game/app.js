const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'chesseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
        {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'chesseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let chosenCardsIds = [];
const cardsWon = [];
const resultDisplay = document.querySelector('#result');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = chosenCardsIds[0];
    const optionTwoId = chosenCardsIds[1];
    console.log('Check for match!');

    
    if (cardsChosen[0] === cardsChosen[1]){
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            alert("You've clicked the same image!")
        } else {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    cardsChosen= [];
    chosenCardsIds = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerHTML += "<br> Congratulation you found them all! "
    }
}

function flipCard() {
    let cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    chosenCardsIds.push(cardID);
    console.log(cardsChosen);
    console.log(chosenCardsIds);
    this.setAttribute('src', cardArray[cardID].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
