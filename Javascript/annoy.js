/*
var answer = prompt("Are we there yet?");

while(answer !== "yes" && answer !== "Yes" && answer !== "YES") {
    var answer = prompt("Are we there yet?");
}

    alert("Yay! We made it!");
*/

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("Yay! We made it!");
