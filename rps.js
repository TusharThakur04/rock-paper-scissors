let computerScore = 0
let humanScore = 0 ;

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3) 
switch(a){
    case 0 :
        return "rock" ;
    case 1 :
        return "paper" ;
    case 2 :
        return "scissors" ;
    }

}


 function getHumanChoice(){
    let b = prompt("rock , paper or scissors").toLowerCase();
    return b ;

 }


function playRound(computerChoice , humanChoice ){
    if(computerChoice === humanChoice)
        console.log("Draw") ;
    else if (computerChoice==="rock"){
        if(humanChoice==="paper"){
            humanScore++ ;
            console.log("You win!");
        }
        else{
            computerScore++ ;
            console.log("You lose!") ;
        }
    }
        else if (computerChoice==="paper"){
            if(humanChoice==="scissors"){
                humanScore++ ;
                console.log("You win!");
            }
            else{
                computerScore++;
                console.log("You lose!");
            }
        }
        else if (computerChoice==="scissors"){
            if(humanChoice==="rock"){
                humanScore++ ;
                console.log("You win!");
            }
            else{
                computerScore++;
                console.log("You lose!");
            }
        }

}


function playGame(){
    for(let i = 0 ; i < 5 ; i++){
        let computerChoice = getComputerChoice() ;
        let humanChoice =getHumanChoice();
        playRound(computerChoice , humanChoice) ;
        
    }
    console.log(`Final Scores: Your: ${humanScore}, Computer: ${computerScore}`);
}


playGame();