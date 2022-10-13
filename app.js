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
const blocker = () => {
    let optionsButtons = document.querySelectorAll('.options');
    let letterButtons = document.querySelectorAll('.letters');

    //disable all options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    //disable all leters
    letterButtons.forEach((button) =>{
        button.disabled.true;
    });

    newGameContainer.classList.remove('hide');
}

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
    //initially hide letters ,clear previous word
    letterContainer.classList.remove('hide');
    userInputSection.innerText = '';

    let optionArray = options[optionValue];

    //choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    console.log(chosenWord);

    //replace every letter with span containing dash
    let displayItem = chosenWord.replace(/./g,'<span class="dashes">_</span>');

    //display each element as span
    userInputSection.innerHTML = displayItem;
};

//initial function calls when page loads or new game button pressed

const initializer = () => {
    winCount = 0;
    count = 0

    

    //initially erase all content and hide letters and new game button
    userInputSection.innerHTML = '';
    optionsContainer.innerHTML = '';
    letterContainer.classList.add('hide');
    newGameContainer.classList.add('hide');
    letterContainer.innerHTML = '';
    //For creating letter buttons

    for(let i = 65; i<91; i++){
        let button = document.createElement('button');
        button.classList.add('letters');
        //number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);
        //character button click
        button.addEventListener('click',() => {
            let charArray = chosenWord.split('');
            let dashes = document.getElementsByClassName('dashes');
            //if array contains clicked value replace the matched dash with letter
            //else dram on canvas
            if(charArray.includes(button.innerText)){
                charArray.forEach((char,index)=>{
                    //if character in array is same as clicked button
                    if(char === button.innerText){
                        //replace dash with inner text
                        dashes[index].innerText = char;
                        //increment counter
                        winCount +=1;
                        //if winCount equals word length
                        if(winCount == charArray.length){
                            resultText.innerHTML = `<h2 class = 'win-msg'>
                            You win!!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                            //block all buttons
                            blocker();
                        }
                    }
                });
            }
        });
        letterContainer.appendChild(button);
    }
    displayOptions();
};
//new game
newGameButton.addEventListener('click',initializer);


window.onload = initializer;