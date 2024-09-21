let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let remainingGuesses = 10;

document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    let userGuess = Number(document.querySelector(".guessfield").value);
    guesses.push(userGuess);
    remainingGuesses--;

    document.querySelector(".guesses").textContent = guesses.join(", ");
    document.querySelector(".lastresult").textContent = remainingGuesses;

    if (userGuess === randomNumber) {
        document.querySelector(".loworhi").textContent = "Congratulations! You got it right!";
        endGame();
    } else if (remainingGuesses === 0) {
        document.querySelector(".loworhi").textContent = "Game over!";
        endGame();
    } else {
        document.querySelector(".loworhi").textContent = userGuess < randomNumber ? "Too low!" : "Too high!";
    }

    document.querySelector(".guessfield").value = '';
});

function endGame() {
    document.querySelector(".guessfield").disabled = true;
    document.querySelector(".guesssubmit").disabled = true;
    let resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    remainingGuesses = 10;
    document.querySelector(".guesses").textContent = '';
    document.querySelector(".lastresult").textContent = remainingGuesses;
    document.querySelector(".loworhi").textContent = '';
    document.querySelector(".guessfield").disabled = false;
    document.querySelector(".guesssubmit").disabled = false;
    document.querySelector(".guessfield").value = '';
    document.body.removeChild(document.querySelector("button"));
}
