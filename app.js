let buttons = document.querySelectorAll("button");
let displayResults = document.querySelector(".display-results");
buttons.forEach((button) => button.addEventListener("click", selectMoves));

// Player's Choice
let playerSelection = "";
let playersChoice = document.createElement("p");
displayResults.appendChild(playersChoice);
// Computer's Choice
let computerSelection = "";
let computersChoice = document.createElement("p");
displayResults.appendChild(computersChoice);

//  create variables to keep track of the score
let playerScore = 0;
let computerScore = 0;

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
  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore);
    playerScore = 0;
    computerScore = 0;
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
  // Print value played by computer to console
  return comPlay;
}

// Write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Check whether playerSelection is rock, paper or scissors and compare to computerSelection
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
    return "It's a tie";
  } else {
    console.log("Please stick to the rules ('rock', 'paper', or 'scissors')");
  }
}

function declareWinner(score1, score2) {
  if (score1 > score2) {
    console.log("You win!!");
  } else if (score1 < score2) {
    console.log("You lose!!");
  } else {
    console.log("It's a tie!!");
  }
}
