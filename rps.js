document.addEventListener("DOMContentLoaded" ,()=>{
    let computerScore = 0
    let humanScore = 0 ;
    let humanChoice ;
    let computerChoice ;


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
    
    function playRound( ){
        computerChoice = getComputerChoice() ;
        if(humanScore < 5 && computerScore < 5){
            if(computerChoice===humanChoice){

            }
            else if (computerChoice==="rock"){
                if(humanChoice==="paper"){
                    humanScore++ ;    
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




    }
            
    const rock = document.querySelector("#rock") ;
    const paper = document.querySelector("#paper") ;
    const scissors = document.querySelector("#scissors") ;
    const yourScore = document.querySelector(".yrScore") ;
    const compScore = document.querySelector(".cScore") ;
    const yChoice = document.querySelector(".yChoice") ;
    const cChoice = document.querySelector(".cChoice") ;

    rock.addEventListener("click" , (e)=>{
        humanChoice = "rock"; 
        playRound() ;
        yChoice.textContent = e.target.id ;
        cChoice.textContent = computerChoice ;
        yourScore.textContent = humanScore ;
        compScore.textContent = computerScore ;
        if (humanScore ===5 ) {
            let won = document.querySelector(".won");
            won.textContent = "You won";
            setTimeout(() => {
                alert("Refresh to start again");
            }, 20);
            } 
            else if(computerScore===5) {
                let won = document.querySelector(".won");
                won.textContent = "Computer Won";
                setTimeout(() => {
                    alert("Refresh to start again");
                }, 20);
            }
    })
    paper.addEventListener("click" , (e)=>{
        humanChoice = "paper";
        playRound() ;
        yChoice.textContent = e.target.id ;
        cChoice.textContent = computerChoice ;
        yourScore.textContent = humanScore ;
        compScore.textContent = computerScore ;
        if (humanScore ===5 ) {
            let won = document.querySelector(".won");
            won.textContent = "You won";
            setTimeout(() => {
                alert("Refresh to start again");
            }, 20);
            } 
            else if(computerScore===5) {
                let won = document.querySelector(".won");
                won.textContent = "Computer Won";
                setTimeout(() => {
                    alert("Refresh to start again");
                }, 20);
            }
    });
    scissors.addEventListener("click" , (e)=>{
        humanChoice = "scissors"; 
        playRound() ;
        yChoice.textContent = e.target.id ;
        cChoice.textContent = computerChoice ;
        yourScore.textContent = humanScore ;
        compScore.textContent = computerScore ;
        
        if (humanScore ===5 ) {
            let won = document.querySelector(".won");
            won.textContent = "You won";
            setTimeout(() => {
                alert("Refresh to start again");
            }, 20);
            } 
            else if(computerScore===5) {
                let won = document.querySelector(".won");
                won.textContent = "Computer Won";
                setTimeout(() => {
                    alert("Refresh to start again");
                }, 20);
            }
    })


    


    
    
})







