// create game of rock paper scissors

let rockBtn = document.querySelector('.rockbtn');
let paperBtn = document.querySelector('.paperbtn');
let scissorsBtn = document.querySelector('.scissorsbtn');
const playerScoreShow = document.querySelector('.player-score');
const computerScoreShow = document.querySelector('.computer-score');
const scoreInfo = document.querySelector('.score-info');
let winner;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    let choice = Math.floor(Math.random() * 3);
    if ( choice === 0 ) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else if (choice === 2) {
        return "Scissors";
    }
    
}





    



function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
          winner = 'tie'
        }
        if (
          (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
          (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
          (playerSelection === 'Paper' && computerSelection === 'Rock')
        ) {
          playerScore += 1;
          winner = 'player'
        }
        if (
          (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
          (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
          (computerSelection === 'Paper' && playerSelection === 'Rock')
        ) {
          computerScore += 1;
          winner = 'computer'
  }
        updateScore(winner, playerSelection, computerSelection)
}


function playGame(playerSelection) {
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScore();
}

function gameOver() {
    return playerScore == 5 || computerScore == 5;
}

function updateScore(){   
    if (winner == 'tie'){
        scoreInfo.textContent = "It is a tie! Shoot!"
    }
    if (winner == 'player'){
        scoreInfo.textContent = `${playerSelection} beats ${computerSelection}`
    }
    if (winner == 'computer'){
        scoreInfo.textContent = `${computerSelection} beats ${playerSelection}`
    }
    playerScoreShow.textContent = `${playerScore}`;
    computerScoreShow.textContent = `${computerScore}`;
}

function playerChoice(){

}   
    rockBtn.addEventListener('click', () => playGame("Rock"));

    
    paperBtn.addEventListener('click', () => playGame("Paper"));

    
    scissorsBtn.addEventListener('click', () => playGame("Scissors"));
        
