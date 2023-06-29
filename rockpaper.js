let playersSelection;
let compNum;
let computerSelection;
let result;
let compScore = 0;
let playerScore = 0;



function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
}


function getComputerChoice(num) {
    if (num === 1 ) {
        computerSelection = 'rock';
    }
    else if (num === 2) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}


function playRound(playersSelection, computerSelection) {
    if (playersSelection === 'rock') {
        if (computerSelection === 'rock') {
            result = `tie`;
        }
        else if (computerSelection === 'paper') {
            result = `Paper beats rock you lose!`
            compScore = compScore + 1;
        }
        else {
            result = 'Rock beats scissors you win!';
            playerScore = playerScore + 1;
        }
    }
    else if (playersSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'Paper beats rock you win!';
            playerScore = playerScore + 1;
        }
        else if (computerSelection === 'paper') {
            result = `It's a tie!`;
        }
        else {
            result = `Scissors Beats rock! You lose!`;
            compScore = compScore + 1;
        }
    }
    else {
        if (computerSelection === 'rock') {
            result = 'Rock beats scissors you lose!';
            compScore = compScore + 1;
        }
        else if (computerSelection === 'paper') {
            result = `Scissors beats paper you win!`;
            playerScore = playerScore + 1;
        }
        else {
            result = `It's a tie!`;
        }
    }
}
function garbageCollect(str) {
    if (str != 'rock' || str != 'paper' || str != 'scissors') {
        str = prompt('Please enter a valid choice of rock paper or scissors!');
        playersSelection = playersSelection.toLowerCase();
    }
    return str;
}
function game() {
    compNum = randomNumber(1, 3);
    computerSelection = getComputerChoice(compNum);
    playersSelection = prompt('Rock, paper, or scissors?');
    playersSelection = playersSelection.toLowerCase();
    playRound(playersSelection, computerSelection); // round 1
    compNum = randomNumber(1, 3);
    computerSelection = getComputerChoice(compNum);
    playersSelection = prompt('Rock, paper, or scissors?');
    playersSelection = playersSelection.toLowerCase();
    playRound(playersSelection, computerSelection); // round 2
    compNum = randomNumber(1, 3);
    computerSelection = getComputerChoice(compNum);
    playersSelection = prompt('Rock, paper, or scissors?');
    playersSelection = playersSelection.toLowerCase();
    playRound(playersSelection, computerSelection); // round 3
    compNum = randomNumber(1, 3);
    computerSelection = getComputerChoice(compNum);
    playersSelection = prompt('Rock, paper, or scissors?');
    playersSelection = playersSelection.toLowerCase();
    playRound(playersSelection, computerSelection); // round 4
    compNum = randomNumber(1, 3);
    computerSelection = getComputerChoice(compNum);
    playersSelection = prompt('Rock, paper, or scissors?');
    playersSelection = playersSelection.toLowerCase();
    playRound(playersSelection, computerSelection); // round 5


    if (playerScore > compScore) {
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