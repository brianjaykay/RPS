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

// function playerPlay() {
//    const rock = document.querySelector('#rock');
//    rock.onclick = () => {return "Rock";    
// }
//    const paper = document.querySelector('#paper');
//    paper.onclick = () => {return "Paper"; 
//    }
//    const scissors = document.querySelector('#scissors');
//    scissors.onclick = () => {return "Scissors"; 
// }};

function playRound(playerChoice) {

    

    let computerChoice = computerPlay();
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

    let buts = document.querySelectorAll('button');
    buts.forEach((button) =>
    button.addEventListener("click", () => {
        if (button.id){
            playRound(button.id);
        }
    })
    );
    
    }


  
