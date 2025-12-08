let darkModeButton = document.querySelector("#dark-mode");
let body = document.querySelector("body");
let isLightMode = true;

let choices = document.querySelectorAll(".choice");
let userChoiceDisplay = document.querySelector("#user-choice");
let computerChoiceDisplay = document.querySelector("#computer-choice");
let resultDisplay = document.querySelector("#result");
let userScoreDisplay = document.querySelector("#user-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let winnerDisplay = document.querySelector("#winner");
let resetButton = document.querySelector("#reset");

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 3;

darkModeButton.addEventListener("click", function() {
  if (isLightMode) {
    body.style.backgroundColor = "#333333";
  } else {
    body.style.backgroundColor = "#f2f2f2";
  }
  isLightMode = !isLightMode;
});

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "Draw!";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "you win!";
  }
  return "computer win!";
}

function updateScoresAndCheckWinner(result) {
  let isDecisive = false;

  if (result === "you win!") {
    userScore++;
    userScoreDisplay.textContent = userScore;
    isDecisive = true;
  } else if (result === "computer win!") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    isDecisive = true;
  }
  // No points or increment for draw

  if (isDecisive) {
    roundsPlayed++;
    if (roundsPlayed === maxRounds) {
      let winnerText;
      if (userScore > computerScore) {
        winnerText = "You";
      } else if (computerScore > userScore) {
        winnerText = "Computer";
      } else {
        winnerText = "Tie";
      }
      winnerDisplay.textContent = winnerText;
      // Disable choices to prevent further plays
      choices.forEach(choice => choice.disabled = true);
    }
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", (e) => {
    if (roundsPlayed >= maxRounds) return; // Prevent plays after max decisive rounds

    const userChoice = e.target.dataset.choice;
    const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;

    const result = getResult(userChoice, computerChoice);
    resultDisplay.textContent = result;

    updateScoresAndCheckWinner(result);
  });
});

resetButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  userScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  winnerDisplay.textContent = "-";
  userChoiceDisplay.textContent = "-";
  computerChoiceDisplay.textContent = "-";
  resultDisplay.textContent = "-";
  choices.forEach(choice => choice.disabled = false);
});
