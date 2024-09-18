

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let playerChoice;
let computerChoice;
let result;

const choices = ["ROCK", "PAPER", "SCISSORS", "SPOCK", "LIZARD"];

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randNum];
}

function checkWinner() {
  const winningCombinations = {
    ROCK: ["SCISSORS", "LIZARD"],
    PAPER: ["ROCK", "SPOCK"],
    SCISSORS: ["PAPER", "LIZARD"],
    SPOCK: ["ROCK", "SCISSORS"],
    LIZARD: ["SPOCK", "PAPER"],
  };

  if (playerChoice === computerChoice) {
    return "Draw!";
  } else if (winningCombinations[playerChoice].includes(computerChoice)) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}


