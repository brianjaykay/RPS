// create game of rock paper scissors

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
let playerScore = 0;
    let computerScore = 0;
function playRound(playerSelection) {

    

    let computerChoice = computerPlay();
    // let playerSelection = prompt("Player Choice: ");
    let playerChoice = (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase())
    console.log(`You chose ${playerChoice}.`)
    console.log(`The computer chose ${computerChoice}!`)

    if (playerChoice === "Rock" && computerChoice === "Rock") {
        console.log("It's a tie");
        
    } else if (playerChoice === "Rock" && computerChoice === "Paper"){
        console.log("Paper covers Rock!");
        return computerScore += 1;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors"){
        console.log("Rock smashes Scissors!");
        return playerScore += 1;
    }  else if (playerChoice === "Paper" && computerChoice === "Rock"){
        console.log("Paper covers Scissors!");
        return playerScore += 1;
    }  else if (playerChoice === "Paper" && computerChoice === "Paper"){
        console.log("It's a tie");
        
    }  else if (playerChoice === "Paper" && computerChoice === "Scissors"){
        console.log("Scissors cut Paper!");
        return computerScore += 1;
    }  else if (playerChoice === "Scissors" && computerChoice === "Rock"){
        console.log("Rock smashes Scissors!");
        return computerScore += 1;
    }  else if (playerChoice === "Scissors" && computerChoice === "Paper"){
        console.log("Scissors cut Paper!");
        return playerScore += 1;
    }  else if (playerChoice === "Scissors" && computerChoice === "Scissors"){
        console.log("It's a tie");
    
    }
    
  }
   
function playGame() {

    
    while (playerScore < 5 && computerScore < 5) {
        console.log(playRound());
    }
}


    let rockBtn = document.querySelector('.rock');
    rockBtn.addEventListener('click', function (e) {
        playRound("Rock")
      });

    let paperBtn = document.querySelector('.paper');
    paperBtn.addEventListener('click', function (e) {
        playRound("Paper")
        });

    let scissorsBtn = document.querySelector('.scissors');
    scissorsBtn.addEventListener('click', function (e) {
        playRound("Scissors")
        });