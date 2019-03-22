var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses= 0;
    var guessesLeft = 10;
    var guessesSoFar = [];

    var directionsText = document.getElementById ("directions-text");
    var winsText = document.getElementById ("wins-text");
    var lossesText = document.getElementById ("losses-text");
    var guessesLeftText = document.getElementById ("guessesLeft-text");
    var guessesSoFarText = document.getElementById ("guessesSoFar-text");
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFarText.textContent = "Your Guesses so far: " + guessesSoFar;

    document.onkeyup = function(event) {

        var userGuess =  event.key;

        var computerGuess = letters[Math.floor(Math.random() * letters.length)];

        if (guessesLeft === 0) {
            console.log("there is 0 guesses left. add a loss and restart game")
            losses++; guessesLeft = 10; guessesSoFar = [];
        } else {
            guessesSoFar.push(userGuess);
            console.log("user still has  " + guessesLeft + " guesses left.")
            if (userGuess === computerGuess) {
            wins++; guessesLeft = 10; guessesSoFar = [];
            } else {
            guessesLeft--;
            }
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarText.textContent = "Your Guesses so far: " + guessesSoFar;
    };