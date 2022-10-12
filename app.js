// Declare variables

const letterContainer = document.getElementById('letter-container');
const optionsContainer = document.getElementById('options-container');
const userInputSection = document.getElementById('user-input-section');
const newGameContainer = document.getElementById('new-game-container');
const newGameButon = document.getElementById('new-game-button');
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