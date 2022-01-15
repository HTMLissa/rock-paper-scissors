let buttons = document.querySelectorAll("button");
let displayResults = document.querySelector(".display-results");
let scoreContainer = document.querySelector(".score-container");

let currentScoreDiv = document.createElement("div");
let winnersAnnouncement = document.createElement("h1");
// Player's Choice
let playerSelection = "";
let playersChoice = document.createElement("p");
currentScoreDiv.appendChild(playersChoice);
// Computer's Choice
let computerSelection = "";
let computersChoice = document.createElement("p");
currentScoreDiv.appendChild(computersChoice);
displayResults.appendChild(currentScoreDiv);

//  create variables to keep track of the score
let playerScore = 0;
let computerScore = 0;
let result;

buttons.forEach((button) => button.addEventListener("click", selectMoves));

function selectMoves(e) {
  // Let user play
  selectingPlayersMove(e);
  //   Let computer play
  selectingComputersMove();
  //   Play a round;
  let playedRound = playRound(playerSelection, computerSelection);
  if (playedRound == 1) {
    playerScore++;
  } else if (playedRound == 0) {
    computerScore++;
  }
  //   Display current Score
  scoreContainer.innerHTML = ` (Your score) <span>${playerScore}</span> : <span>${computerScore}</span> (Computer's score)`;

  if (playerScore === 5 || computerScore === 5) {
    result = declareWinner(playerScore, computerScore);
    if (result == "win") {
      winnersAnnouncement.textContent = "You win!!";
    } else if (result == "lose") {
      winnersAnnouncement.textContent = "You lose!!";
    }
    winnersAnnouncement.classList.add("winner");
    displayResults.appendChild(winnersAnnouncement);
    playerScore = 0;
    computerScore = 0;
    buttons.forEach((button) => {
      button.disabled = "true";
      button.classList.add("btn-disabled");
      button.style.pointerEvents = "none";
    });
  }
  displayResults.classList.add("results-box");
}

function selectingPlayersMove(e) {
  playerSelection = e.target.value;
  playersChoice.textContent = `Your choice: ${playerSelection}`;
}

function selectingComputersMove() {
  computerSelection = computerPlay();
  computersChoice.textContent = `Computer's choice: ${computerSelection}`;
}

// Write a function that randomly generates rock, paper, or scissors
function computerPlay() {
  // Generate random numbern between 1 - 3
  let randomNum = Math.floor(Math.random() * 3) + 1;
  // Assign rock, paper & scissors to each number to variable comPlay
  let comPlay = "";
  if (randomNum == 1) {
    comPlay += "rock";
  } else if (randomNum == 2) {
    comPlay += "paper";
  } else {
    comPlay += "scissors";
  }
  return comPlay;
}

// Write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return 0;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return 0;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return 0;
  } else if (playerSelection === computerSelection) {
    return "tie";
  } else {
    console.log("Please stick to the rules ('rock', 'paper', or 'scissors')");
  }
}

function declareWinner(score1, score2) {
  // Winner's Announcement
  if (score1 > score2) {
    return "win";
  } else if (score1 < score2) {
    return "lose";
  }
}
