let playersSelection;
let compNum;
let computerSelection;
let result;
let compScore = 0;
let playerScore = 0;
let numRounds;


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
}


function getComputerChoice(num) {
    switch (num) {
        case 1:
            computerSelection = 'rock';
            break;
        case 2:
            computerSelection = 'paper';
            break;
        case 3: 
            computerSelection = 'scissors';
            break;
    }
    return computerSelection;
}

 function getPlayersChoice() {
    playersSelection = prompt('Rock, paper, or scissors?');
    playersSelection = playersSelection.toLowerCase();
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
            result = `Computer chose paper! It's a tier!`;
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
    alert(result);
}
function garbageCollect(str) {
    if (str != 'rock' || str != 'paper' || str != 'scissors') {
        str = prompt('Please enter a valid choice of rock paper or scissors!');
        playersSelection = playersSelection.toLowerCase(); //test
    }
    return str;
}
function game() {
    numRounds = prompt('How many rounds would you like to play?');
    for (let i = 1; i <= numRounds; i ++) {
        compNum = randomNumber(1, 3);
        computerSelection = getComputerChoice(compNum);
        playersSelection =  getPlayersChoice();
        playRound(playersSelection, computerSelection);
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
game();
whoWon(playerScore, compScore);