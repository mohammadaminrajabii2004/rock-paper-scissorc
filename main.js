const choices = ["rock", "paper", "scissors"];

const userChoice = prompt("Choose rock, paper, scissors");
if (userChoice) {
    alert(`You choose: ${userChoice}`);
} else {
    alert("You cheated!")
}

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNumber];
alert(`Computer chooses: ${computerChoice}`);

if (userChoice === computerChoice) {
    alert("It's a tie");
} else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        alert("You Win :)");
    } else {
        alert("you lose :(")
    }
} else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        alert("You win :)")
    } else {
        alert("You lose :(")
    }
} else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
        alert("You win :)")
    } else {
        alert("You lose :(")
    }
}

