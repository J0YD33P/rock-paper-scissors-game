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

const buttons = document.querySelectorAll(".icon");
console.log(buttons);
const imagePlayer = document.createElement("img");
const imageCPU = document.createElement("img");

function showImage(imageType, imageName){
    imageType.setAttribute("src", `./icons/${imageName}.png`);
    imageType.setAttribute("width", "250px");
    imageType.setAttribute("style", "margin: 15px");
}


buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {

        let choice = button.getAttribute("id");
        showImage(imagePlayer, choice);
        document.querySelector(".player-selection").appendChild(imagePlayer);

    });

    button.addEventListener("click", () => {
        humanChoice = button.getAttribute("id");
        computerChoice = getComputerChoice();
        showImage(imageCPU, computerChoice);
        document.querySelector(".cpu-selection").appendChild(imageCPU);
        playRound(humanChoice, computerChoice);
    })
})

const playerSelection = document.querySelector(".player-selection");
const cpuSelection = document.querySelector(".cpu-selection");
const playerScore = document.querySelector(".score-player");
const cpuScore = document.querySelector(".score-cpu");

function playRound(humanChoice, computerChoice){

    if (humanChoice == computerChoice){
        playerSelection.setAttribute("style", "border: solid 10px #7FFFD4");
        cpuSelection.setAttribute("style", "border: solid 10px #7FFFD4")
        // console.log("Both you and the computer chose "+humanChoice+"!");
        // console.log("Score: You: "+humanScore+", CPU: "+computerScore);
    }

    else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
        || (humanChoice === 'toilet-paper' && computerChoice === 'rock') 
        || (humanChoice === 'scissors' && computerChoice === 'toilet-paper')){

            playerSelection.setAttribute("style", "border: solid 10px #7FFFD4");
            cpuSelection.setAttribute("style", "border: solid 10px #D2042D");
            playerScore.textContent = ++humanScore;
            // console.log("Your choice was "+humanChoice+" whereas the CPU chose "+computerChoice+
            // ". \nScore: You: "+(++humanScore)+", CPU: "+computerScore+"."); 
        }

    else{
        playerSelection.setAttribute("style", "border: solid 10px #D2042D");
        cpuSelection.setAttribute("style", "border: solid 10px #7FFFD4");
        cpuScore.textContent = ++computerScore;
        // console.log("Your choice was "+humanChoice+" whereas the CPU chose "+computerChoice+
        // ". \nScore: You: "+humanScore+", CPU: "+(++computerScore)+"."); 
    }

}

// function playGame(){

//     for (let round=0; round<5; round++ ){
//         const humanSelection = humanChoice;
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection,computerSelection);
//     }
// }

// if (humanScore > computerScore){
//     console.log("Final Score: You: "+humanScore+", CPU: "+computerScore+". \nCongratulations! You won!");
// }

// else if (computerScore > humanScore){
//     console.log("Final Score: You: "+humanScore+", CPU: "+computerScore+". \nYou lost.")
// }

// else{
//     console.log("Final Score: You: "+humanScore+", CPU: "+computerScore+". \nIts a draw!")
// }

