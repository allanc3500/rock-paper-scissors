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


let humanScore = 0;
let computerScore = 0;
const humanScoreHTML = document.querySelector("#humanScoreElem");
const computerScoreHTML = document.querySelector("#computerScoreElem");
const imageButtons = document.querySelectorAll(".img-btn");
const messageLog = document.querySelector("#message-log");

const start = document.querySelector("#start-btn");
start.addEventListener("click", () =>{ 
    start.disabled = true;
    imageButtons.forEach((button) => {
        button.classList.remove("disabled");
        humanScoreHTML.textContent = 0;
        computerScoreHTML.textContent = 0;
        messageLog.textContent = "Choose Rock, Paper, or Scissors";
        humanScore = 0;
        computerScore = 0;
    });
});

const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScsrs");
const computerImage = document.querySelector("#img-computerChoice");


rock.addEventListener("click", () => {;
    const humanImage = document.querySelector("#img-humanChoice");
    humanImage.src = "./images/hand rock.png";
    playRound("rock", getComputerChoice());
})

paper.addEventListener("click", () => {
    const humanImage = document.querySelector("#img-humanChoice");
    humanImage.src = "./images/hand-paper.png";
    playRound("paper", getComputerChoice());
})


scissors.addEventListener("click", () => {
    const humanImage = document.querySelector("#img-humanChoice");
    humanImage.src ="./images/hand scissors.png";
    playRound("scissors", getComputerChoice());
})


function getComputerImage(choice){
    if (choice == "scissors"){
        computerImage.src = "./images/hand scissors.png";
    }
   else if (choice == "rock"){
        computerImage.src = "./images/hand rock.png";
    }
    else {
        computerImage.src = "./images/hand-paper.png";
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        getComputerImage(computerChoice);
        messageLog.textContent = "Tie! Both Player and Computer picked " + humanChoice;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        getComputerImage(computerChoice);
        computerScore++;
        computerScoreHTML.textContent = computerScore;
        messageLog.textContent = "Computer Wins! " + computerChoice + " beats " + humanChoice + "!";
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        getComputerImage(computerChoice);
        computerScore++;
        computerScoreHTML.textContent = computerScore;
        messageLog.textContent = "Computer Wins! " + computerChoice + " beats " + humanChoice + "!";
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        getComputerImage(computerChoice);
        computerScore++;
        computerScoreHTML.textContent = computerScore;
        messageLog.textContent = "Computer Wins! " + computerChoice + " beats " + humanChoice + "!";

    }
    else{
        getComputerImage(computerChoice);
        humanScore++;  
        humanScoreHTML.textContent = humanScore;  
        messageLog.textContent = "You Win! " + humanChoice + " beats " + computerChoice + "!";

    }

    if(humanScore == 5){
        messageLog.textContent = "Congrats! You scored 5 points first! Press the Start button to play again.";
        start.disabled = false;
        imageButtons.forEach((button) => {
            button.classList.add("disabled");
        });
    }
    if(computerScore == 5){
        messageLog.textContent = "Computer has won the game. Press the Start button to play again.";
        start.disabled = false;
        imageButtons.forEach((button) => {
            button.classList.add("disabled");
        });
    }
}

