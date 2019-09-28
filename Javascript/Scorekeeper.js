var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
/* Or can be written as:
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
 */
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var playingTo = document.getElementById("setWinningScore");
/* Alternate method of getting element:
var playingTo = document.querySelector("p span");
 */
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    //p1Display.classList.add("reset");
    p1Display.classList.remove("winner");

    p2Score = 0;
    p2Display.textContent = p2Score;
    //p2Display.classList.add("reset");
    p2Display.classList.remove("winner");

    gameOver = false;
};

numInput.addEventListener("change", function() {
    playingTo.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});