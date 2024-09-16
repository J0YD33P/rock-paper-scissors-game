const selection = ["rock","toilet-paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanChoice, computerChoice;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return selection[getRandomInt(3)];
}

function disableButtons() {
    rockBtn.style.pointerEvents = 'none';
    paperBtn.style.pointerEvents = 'none';
    scissorsBtn.style.pointerEvents = 'none';

    rockBtn.style.opacity = '0.3';
    paperBtn.style.opacity = '0.3';
    scissorsBtn.style.opacity = '0.3';
}

function resetGame(){

    humanScore = 0;
    computerScore = 0;

    mainContainer.style.opacity = '1';
    restartContainer.style.display = 'none';
    imagePlayer.src = '';
    imageCPU.src = '';
    playerScore.textContent = 0;
    cpuScore.textContent = 0;
    playerSelection.style.border = 'solid 10px #9290C3';
    cpuSelection.style.border = 'solid 10px #9290C3';

    rockBtn.style.pointerEvents = 'auto';
    paperBtn.style.pointerEvents = 'auto';
    scissorsBtn.style.pointerEvents = 'auto';

    rockBtn.style.opacity = '1';
    paperBtn.style.opacity = '1';
    scissorsBtn.style.opacity = '1';

}

const buttons = document.querySelectorAll(".icon");
const imagePlayer = document.createElement("img");
const imageCPU = document.createElement("img");

function showImage(imageType, imageName){
    imageType.setAttribute("src", `./icons/${imageName}.png`);
    imageType.setAttribute("width", "250px");
    imageType.setAttribute("style", "margin: 15px");
}

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('toilet-paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {

        let choice = button.getAttribute("id");
        showImage(imagePlayer, choice);
        document.querySelector(".player-selection").appendChild(imagePlayer);
    });

    button.addEventListener("click", () => {
        if(humanScore < 5 && computerScore < 5){
            humanChoice = button.getAttribute("id");
            computerChoice = getComputerChoice();
            showImage(imageCPU, computerChoice);
            document.querySelector(".cpu-selection").appendChild(imageCPU);
            playRound(humanChoice, computerChoice);
        }
    });
});

const playerSelection = document.querySelector(".player-selection");
const cpuSelection = document.querySelector(".cpu-selection");
const playerScore = document.querySelector(".score-player");
const cpuScore = document.querySelector(".score-cpu");
const mainContainer = document.querySelector(".main-container");
const restartContainer = document.querySelector(".restart-container");
const endGameDescription = document.querySelector(".end-game-description");
const playAgainButton = document.querySelector(".play-again-btn")

function playRound(humanChoice, computerChoice){

    if (humanChoice == computerChoice){
        playerSelection.setAttribute("style", "border: solid 10px #7FFFD4");
        cpuSelection.setAttribute("style", "border: solid 10px #7FFFD4")
    }

    else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
        || (humanChoice === 'toilet-paper' && computerChoice === 'rock') 
        || (humanChoice === 'scissors' && computerChoice === 'toilet-paper')){

            playerSelection.setAttribute("style", "border: solid 10px #7FFFD4");
            cpuSelection.setAttribute("style", "border: solid 10px #D2042D");
            playerScore.textContent = ++humanScore;
        }

    else{
        playerSelection.setAttribute("style", "border: solid 10px #D2042D");
        cpuSelection.setAttribute("style", "border: solid 10px #7FFFD4");
        cpuScore.textContent = ++computerScore;
    }

    if (humanScore === 5 || computerScore === 5) {

        disableButtons();
        mainContainer.style.opacity = '0.1';
        restartContainer.style.display = 'block';

        if (humanScore > computerScore){
            endGameDescription.textContent = 'You Won!';
        }
        else{
            endGameDescription.textContent = 'You Lost.';
        }

        playAgainButton.addEventListener("click", () => {
            resetGame();
        });
    }
}






