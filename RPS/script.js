let button = document.querySelector("button");
let body = document.querySelector("body");
let isLightMode = true;

let choices = document.querySelectorAll(".choice");
let userChoiceDisplay = document.querySelector("#user-choice");
let computerChoiceDisplay = document.querySelector("#computer-choice");
let resultDisplay = document.querySelector("#result");

button.addEventListener("click", function changeColor() {
  if (isLightMode) {
    body.style.backgroundColor = "#333333";
  } else {
    body.style.backgroundColor = "#f2f2f2";
  }
  isLightMode = !isLightMode;
});

choices.forEach(choice => {
  choice.addEventListener("click", (e) => {
    const userChoice = e.target.dataset.choice;
    const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = getResult(userChoice, computerChoice);
  });
});

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "Draw!";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

let userScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#computer-score");

choices.forEach(choice => {
  choice.addEventListener("click", (e) => {
    const winner = e.target.dataset.winner;
    updateScore(winner);
  })
})

function updateScore(winner) {
  if (winner === "user") userScore++;
  if (winner === "computer") computerScore++;
}




