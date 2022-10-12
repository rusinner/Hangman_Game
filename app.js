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
        `<button class = 'options' onclick = 
        "generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

//block all the buttons


//word generator

const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll('.options');
    //if optionValue matches the button innerText then highlight the button
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() === optionValue){
            button.classList.add('active');
        }
        button.disabled = true;
    });
};

//initial function calls when page loads or new game button pressed

const initializer = () => {
    winCount = 0;
    count = 0

    //For creating letter buttons

    for(let i = 65; i<91; i++){
        let button = document.createElement('button');
        button.classList.add('letters');
        //number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);
        letterContainer.appendChild(button);
    }
    displayOptions();
};
//new game
newGameButton.addEventListener('click',initializer);


window.onload = initializer;