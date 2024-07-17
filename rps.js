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



let computerChoice = getComputerChoice() ;
let humanChoice ;

playRound(computerChoice , humanChoice) ;
        
    
console.log(`Final Scores: Your: ${humanScore}, Computer: ${computerScore}`);

const rock = document.querySelector("#rock") ;
const paper = document.querySelector("#paper") ;
const scissors = document.querySelector("#scissors") ;

rock.addEventListener("click" , ()=>{
    humanChoice = "rock"; 
    playRound() ;
})
paper.addEventListener("click" , ()=>{
    humanChoice = "paper"; } ,
    playRound() 
)
scissors.addEventListener("click" , ()=>{
    humanChoice = "scissors"; 
    playRound() ;
})





