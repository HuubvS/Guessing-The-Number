let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuess, computerGuess, guessButton){
    if(humanGuess >= computerGuess && humanGuess <= 9 && humanGuess >= 0 ){
        return true;
    }else if(computerGuess > humanGuess) {
        return false;
    } else {
        alert("Do not enter a value outside the scope, see step 1.");
    }
}

function updateScore(winner){
    if(winner == 'human'){
        humanScore++;
    }else {
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}