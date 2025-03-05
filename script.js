let secretNumber
let attempts
let message = document.getElementById("message")
let guessButton = document.getElementById("guess-btn")
guessButton.disabled = true;
guessButton.classList.add("disabled");
function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1
    attempts = 0
    message.textContent = "Guess a number between 1 and 10!";
    message.classList.remove("success");
    guessButton.classList.remove("disabled");
    document.getElementById("guess-input").value = ""
    document.getElementById("guess-btn").disabled = false;
}
function checkNumber() {
    let guess = parseInt(document.getElementById("guess-input").value)
    if (isNaN(guess) || guess < 1 || guess > 10) {
        attempts = 0
        message.textContent = `Please enter a valid number between 1 to 10. ${attempts} attempts left.`
        return
    }
    attempts++

    if (attempts === 3) {
        message.textContent = "You've run out of attempts. The secret number was " + secretNumber + "."
        guessButton.disabled = true;
        guessButton.classList.add("disabled");
    }
    if (guess < secretNumber) {
        message.textContent = `Try a higher number. ${attempts} attempts left.`
    }
    else if (guess > secretNumber) {
        message.textContent = `Try a lower number. ${attempts} attempts left.`
    } else {
        message.classList.add("success");
        message.textContent = `Congratulations! You guessed the secret number ${secretNumber} correctly in ${attempts} attempts.`
        message.classList.add("success");
        guessButton.disabled = true;
        guessButton.classList.add("disabled");
    }
}
document.getElementById("guess-btn").addEventListener("click", checkNumber);
document.getElementById("start-btn").addEventListener("click", startGame);