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
    response = response.toLowerCase();
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

const div = document.createElement("div");
document.body.append(div);
div.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore} Tie Score: ${tieScore}` ;




function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        //alert("Tie Game");
        tieScore++;
        div.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore} Tie Score: ${tieScore}` ;

    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
       // alert("Computer Wins");
        computerScore++;
        div.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore} Tie Score: ${tieScore}` ;

    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        //alert("Computer Wins");
        computerScore++;
        div.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore} Tie Score: ${tieScore}` ;

    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        //alert("Computer Wins");
        computerScore++;
        div.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore} Tie Score: ${tieScore}` ;

    }
    else{
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);
        //alert("Player Wins");
        humanScore++;    
        div.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore} Tie Score: ${tieScore}` ;
    }

    if(humanScore == 5){
        //alert("Player has won the game.");
        document.body.removeChild(rock);
        document.body.removeChild(paper);
        document.body.removeChild(scissors);
        const winnerText = document.createElement('p');
        winnerText.textContent = "Game Over! Player Wins!";
        div.prepend(winnerText);
    }
    if(computerScore == 5){
        //alert("Computer has won the game.");
        document.body.removeChild(rock);
        document.body.removeChild(paper);
        document.body.removeChild(scissors);
        const winnerText = document.createElement('p');
        winnerText.textContent = "Game Over! Computer Wins!";
        div.prepend(winnerText);

    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function(e) {
    playRound("rock", getComputerChoice());

});

paper.addEventListener("click", function(e){
    playRound("paper", getComputerChoice());

})

scissors.addEventListener("click", function(e){
    playRound("scissors", getComputerChoice());

})











