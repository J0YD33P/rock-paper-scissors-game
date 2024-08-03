const selection = ["rock","paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return selection[getRandomInt(3)];
}

function getHumanChoice(){
    while (true){
        let humanPrompt = prompt("Select from the following: Rock, Paper, Scissors").toLowerCase();
        if (humanPrompt !== 'rock' && humanPrompt !== 'paper' && humanPrompt !== 'scissors'){
            console.log("Invalid input.");
        }
        else{
            return humanPrompt;
        }        
    }    
}

function playRound(humanChoice, computerChoice){

    if (humanChoice == computerChoice){
        console.log("Both you and the computer chose "+humanChoice+"!");
        console.log("Score: You: "+humanScore+", CPU: "+computerScore);
    }

    else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
        || (humanChoice === 'paper' && computerChoice === 'rock') 
        || (humanChoice === 'scissors' && computerChoice === 'paper')){
            console.log("Your choice was "+humanChoice+" whereas the CPU chose "+computerChoice+
            ". \nScore: You: "+(++humanScore)+", CPU: "+computerScore+"."); 
        }

    else{
        console.log("Your choice was "+humanChoice+" whereas the CPU chose "+computerChoice+
        ". \nScore: You: "+humanScore+", CPU: "+(++computerScore)+"."); 
    }

}

function playGame(){

    for (let round=0; round<5; round++ ){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
}

playGame(5);

if (humanScore > computerScore){
    console.log("Final Score: You: "+humanScore+", CPU: "+computerScore+". \nCongratulations! You won!");
}

else if (computerScore > humanScore){
    console.log("Final Score: You: "+humanScore+", CPU: "+computerScore+". \nYou lost.")
}

else{
    console.log("Final Score: You: "+humanScore+", CPU: "+computerScore+". \nIts a draw!")
}

