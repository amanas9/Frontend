let computerScore = 0;
let userScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}
//console.log(getComputerChoice());
function convertToWord(choice)
{
    if(choice==="r")
      return "Rock";
    if(choice==="s")
     return "Scissor";
     return "Paper";  
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallu = "user".fontsize(3).sub();
  const smallc = "comp".fontsize(3).sub();
   result_p.innerHTML = convertToWord(userChoice) + smallu + " beats " + convertToWord(computerChoice) + smallc + ". You Win! 🔥";
}
 
function lose(userChoice, computerChoice){
    computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallu = "user".fontsize(3).sub();
  const smallc = "comp".fontsize(3).sub();
   result_p.innerHTML = convertToWord(userChoice) + smallu + " loses to " + convertToWord(computerChoice) + smallc + ". You lost...! ";
}

function draw(userChoice, computerChoice){

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallu = "user".fontsize(3).sub();
  const smallc = "comp".fontsize(3).sub();
   result_p.innerHTML = convertToWord(userChoice) + smallu + " equals " + convertToWord(computerChoice) + smallc + ".It's a tie...";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);


    }
}

function main(){

    rock_div.addEventListener('click', function(){
        game("r");
    });
    
    paper_div.addEventListener('click', function(){
       game("p");
    });
    
    scissors_div.addEventListener('click',function(){
       game("s");
    });
}

main();