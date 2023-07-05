let playersSelection;
let compNum;
let computerSelection;
let result;
let compScore = 0;
let playerScore = 0;
let numRounds = 1;
let finalResult;
let roundResult;

const rps = ['rock', 'paper', 'scissors'];


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
}

 function getPlayersChoice() {
    playersSelection = prompt('Rock, paper, or scissors?');
    playersSelection = playersSelection.toLowerCase();
    alert(`You chose ${playersSelection}!`);
    return playersSelection;
 }

function playRound(playersSelection, computerSelection) {
    if (playersSelection === 'rock') {
        if (computerSelection === 'rock') {
            result = `Computer chose rock too! It's a tie!`;
        }
        else if (computerSelection === 'paper') {
            result = `Computer chose paper you lose!`
            compScore = compScore + 1;
        }
        else {
            result = 'Computer chose scissors you win!';
            playerScore = playerScore + 1;
        }
    }
    else if (playersSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'Computer chose rock you win!';
            playerScore = playerScore + 1;
        }
        else if (computerSelection === 'paper') {
            result = `Computer chose paper! It's a tie!`;
        }
        else {
            result = `Computer chose scissors you lose!`;
            compScore = compScore + 1;
        }
    }
    else {
        if (computerSelection === 'rock') {
            result = 'Computer chose rock you lose!';
            compScore = compScore + 1;
        }
        else if (computerSelection === 'paper') {
            result = `Computer chose paper you win!`;
            playerScore = playerScore + 1;
        }
        else {
            result = `Computer chose rock! It's as tie!`;
        }
    }
    alert(`${result} The score is now user ${playerScore} PC ${compScore}`);
}

function game() {
    compNum = randomNumber(0, 2);
    computerSelection = rps[compNum];
    playRound(playersSelection, computerSelection);
    numRounds++;
    if (numRounds == 5) {
        whoWon();
    }
}
function whoWon(playerScore, compScore) {
    if (playerScore >  compScore) {
        alert(`You win! Final Score is User:${playerScore} PC:${compScore}`);
    }
    else if (playerScore === compScore) {
        alert(`It's a tie! Final Score is User:${playerScore} PC:${compScore}`);
    }
    else {
        alert(`You lose! Final Score is User:${playerScore} PC:${compScore}`);
    }
}

const buttonWrapper = document.querySelector('#buttonWrapper'); //declaring buttons and some html elements for the game 
const buttonStart = document.createElement('button');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonSicssors = document.createElement('button');
const howMany = document.createElement('input');
const buttonsPara = document.createElement('p');
const buttonNewgame = document.createElement('button');


buttonStart.innerText= 'Start';
buttonRock.innerText = 'Rock';
buttonPaper.innerText = 'Paper';
buttonSicssors.innerText = 'Scissors';
buttonsPara.innerText = 'Press start to play!';

buttonWrapper.appendChild(buttonStart);

buttonStart.addEventListener('click', function() {
    start();
});
buttonRock.addEventListener('click', function() {

    playersSelection = 'rock';
    game();
});
buttonPaper.addEventListener('click', function() {

    playersSelection = 'paper';
    game();
});
buttonSicssors.addEventListener('click', function() {
  
    playersSelection = 'sicssors';
    game();
});

function start() {
    buttonStart.remove();
    console.log('click');
    buttonWrapper.appendChild(buttonRock);
    buttonWrapper.appendChild(buttonPaper);
    buttonWrapper.appendChild(buttonSicssors);
    playerScore = 0;
    compScore = 0;
}

function gameOver() {
    buttonRock.remove();
    buttonPaper.remove();
    buttonSicssors.remove();
    buttonWrapper.appendChild(buttonNewgame);
    buttonsPara.innerText(`Game Over! Press Start to start a new game!`);
}