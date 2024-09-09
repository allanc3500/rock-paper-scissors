function getComputerChoice(){

    if(Math.random() <= (1/3)){
        return "rock";
    }
    else if (Math.random() > (1/3) && Math.random() <= (2/3)){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let response = prompt("Pick Rock, Paper, or Scissors:");
    while(response.toLowerCase() != "rock" && response.toLowerCase() != "paper" && response.toLowerCase() != "scissors"){
        alert("Choice invalid! Pick either Rock, Paper, or Scissors.");
        response = prompt("Pick Rock, Paper, or Scissors:");
    }
    return response;
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let playAgain = "y";

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        alert("Tie Game");
        tieScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        alert("Computer Wins");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        alert("Computer Wins");
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        alert("Computer Wins");
        computerScore++;
    }
    else{
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        alert("Player Wins");
        humanScore++;    
    }
}

function playGame(){
    do{
        let counter = 5;
        while(counter > 0){
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            counter--;
        }
        if(humanScore > computerScore){
            alert("Human Wins" + "\n" + "Human Score: " + humanScore +  "\n" + "Computer Score: " + computerScore + "\n" + "Tie Scores: " + tieScore);
        }
        else if (computerScore > humanScore) {
            alert("Computer Wins" + "\n" + "Human Score: " + humanScore +  "\n" + "Computer Score: " + computerScore + "\n" + "Tie Scores: " + tieScore);
        }
        else {
            alert("Tie!" + "\n" + "Human Score: " + humanScore +  "\n" + "Computer Score: " + computerScore + "\n" + "Tie Scores: " + tieScore);
        }

        playAgain = prompt("Play Again: y or n?");
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
    }while(playAgain.toLowerCase() == "y");

    alert("Good Game!");
}

playGame();


