const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissor" || userInput === "bomb"){
    return userInput;
  }
  else {
    console.log("That's an invalid choice a$$");
  }
}

const getComputerChoice = () => {
 let computerChoice = Math.floor(Math.random()*3);
  switch (computerChoice){
    case 0: 
    return 'rock';
      break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === 'bomb'){
    return 'User destroyed the computer';
  }
  if(userChoice === computerChoice){
    return "Tie!";
  }
  if(userChoice === "rock"){
    if(computerChoice === "paper"){
      return "Computer Won";
    } else{
      return "You Won!";
    }
  }
  if(userChoice === "paper"){
    if(computerChoice === "scissors"){
      return "Computer Won!";
    } else {
      return "You Won!";
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === "rock"){
      return "Computer Won!";
    } else {
      return "You Won!";
    }
  }
}

const playGame = () => {
const userChoice = getUserChoice("Bomb");
  const computerChoice = getComputerChoice();
  console.log("Person's: "+ userChoice+ " vs " +" Computer's:"+ computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();

// console.log(determineWinner('paper','rock'));
// console.log(getComputerChoice());
