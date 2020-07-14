
const cardArray = [
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },
    {   
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake.png',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },
    {   
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake.png',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    }

]




function newGame() {
    cardArray.sort(()=> 0.5 - Math.random() )
    


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    const flippedDisplay = document.querySelector('#flipped')
    const display = document.querySelector('#score')
    const playAgainButton = document.querySelector('#playAgain')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var cardsFlipped = 0

    flippedDisplay.textContent = cardsFlipped

    //create grid

    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard) 
            grid.appendChild(card)
        }
    }

    // Check Matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', "images/blank.png")
            cards[optionTwoId].setAttribute('src', "images/blank.png")
            alert('No luck, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            let msg = document.createElement('h2')            
            msg.textContent = `Congratulations! You found them all in only ${cardsFlipped} moves!`
            msg.setAttribute('id', 'victory-msg')
            display.appendChild(msg)
        }

    }

    // Cards Flipped
    function updateFlipped() {
        cardsFlipped = cardsFlipped + 1
        flippedDisplay.textContent = cardsFlipped
    }

    // flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)  
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].image)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
        updateFlipped(cardsFlipped)
    }

    

    
    createBoard()
    playAgainButton.addEventListener('click', restartGame)
}

function restartGame() {
        
    let grid = document.querySelector('.grid')
    let cards = grid.querySelectorAll('img')
    let victoryMsg = document.querySelector('#victory-msg')
    let display = document.querySelector('#score')
    const resultDisplay = document.querySelector('#result')
    

    for (i=0; i<cards.length; i++) {
        let card = grid.querySelector('img')
        grid.removeChild(card)
    }
    if (victoryMsg != null) display.removeChild(victoryMsg)
    resultDisplay.textContent = 0



    newGame()
    

}

newGame()