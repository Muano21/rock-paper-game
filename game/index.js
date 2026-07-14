
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    case 4:
        computer = "SPOCK";
        break;
    case 5:
        computer = "LIZARD";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER" || "SPOCK" ) ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS" || "LIZARD") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK" || "SPOCK") ? "You Win!" : "You Lose!"
    } else if(computer == "SPOCK"){
        return(player == "LIZARD" || "PAPER") ? "YOU Win!" : "You Lose"
    } else if(computer == "LIZARD"){
        return(player == "SCISSORS" || "ROCK") ? "You Win!" : "You Lose"
    }
}