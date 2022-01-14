//  create variables to keep track of the score
let playerScore = 0;
let computerScore = 0;

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
  // Check whether playerSelection is (caseinsensitive) rock, paper or scissors and compare to computerSelection
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    return 0;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    return 0;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    return 0;
  } else if (
    playerSelection.toLowerCase() === computerSelection.toLowerCase()
  ) {
    return "It's a tie";
  } else {
    console.log("Please stick to the rules ('rock', 'paper', or 'scissors')");
  }
}

//   Create function game to play 5 rounds and keep track of the score
function game() {
  // Set score to 0
  playerScore = 0;
  computerScore = 0;
  // play 5 rounds
  for (let i = 0; i < 5; i++) {
    //   Prompt user for play
    let playerSelection = prompt("'rock', 'paper', or 'scissors'?");
    console.log("Your choice: " + playerSelection);
    // Generate variable computerSelection
    let computerSelection = "";
    //  Let computer play
    computerSelection = computerPlay();
    console.log("Computer's choice: " + computerSelection);
    //   Play a round
    let playedRound = playRound(playerSelection, computerSelection);
    //   Keep track of score
    if (playedRound == 1) {
      playerScore++;
    } else if (playedRound == 0) {
      computerScore++;
    }
  }
  // Declare winner
  console.log("Your score: " + playerScore);
  console.log("Computer's score: " + computerScore);

  if (playerScore > computerScore) {
    console.log("You win!!");
  } else if (playerScore < computerScore) {
    console.log("You lose!!");
  } else {
    console.log("It's a tie!!");
  }
}

game();
