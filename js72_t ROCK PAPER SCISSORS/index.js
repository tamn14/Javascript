
const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const  playerScoreDisplay = document.getElementById("playerScoreDisplay")
const  computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0 ;  
let computerScore = 0;  

function playGame(playerChoices) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    let result = "";

    if (playerChoices === computerChoice) [
        result = "It's a tie!"
    ]

    else {
        switch (playerChoices) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You win!" : "You lose!"
                break;

            case "Paper":
                result = (computerChoice === "Rock") ? "You win!" : "You lose!"
                break;

            case "Scissors":
                result = (computerChoice === "Paper") ? "You win!" : "You lose!"
                break;

        }
    }

    playerDisplay.textContent = `Player : ${playerChoices}`; 
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent =  result;

    resultDisplay.classList.remove("greenText", "redText"); 

    switch(result) {
        case "You win!" :
            resultDisplay.classList.add("greenText") ;
            playerScore++; 
            playerScoreDisplay.textContent = playerScore 
            break ; 
        case "You lose!" :
            resultDisplay.classList.add("redText") ;  
            computerScoreDisplay.textContent = computerScore 
            computerScore++
            break ; 
            
    }

}