// Declare variables

const letterContainer = document.getElementById('letter-container');
const optionsContainer = document.getElementById('options-container');
const userInputSection = document.getElementById('user-input-section');
const newGameContainer = document.getElementById('new-game-container');
const newGameButton = document.getElementById('new-game-button');
const canvas = document.getElementById('canvas');
const resultText = document.getElementById('result-text');

//options values for buttons
let options = {
    fruits:[
        'Apple',
        'Blueberry',
        'Mandarin',
        'Pineapple',
        'Pomegranate',
        'Watermelon',
    ],
    animals:[
        'Hedgehog',
        'Rhinoceros','Squirrel',
        'Panther',
        'Walrus',
        'Zebra',
    ],
    countries:[
        'India',
        'Hungary',
        'Kyrgystan',
        'Zimbabwe',
        'Dominica',
    ],
}

//count

let winCount = 0;
let count = 0;

let chosenWord = '';

//display options buttons
const displayOptions = () => {
    optionsContainer.innerHTML = `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement('div');
    for (let value in options){
        buttonCon.innerHTML += 
        `<button class = 'options' onClick = 
        "generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
}

//initial function calls when page loads or new game button pressed

const initializer = () => {
    winCount = 0;
    count = 0
    displayOptions();
};
//new game
newGameButton.addEventListener('click',initializer);


window.onload = initializer;