var age = Number(prompt("How old are you?"));
//var daysAlive = age * 365.25;
//alert("You have been alive " + daysAlive + " days.");
if (age < 0) {
    console.log("Error: You cannot have a negative age.");
}

if (age === 21) {
    console.log("Happy 21st birthday!");
}

if ((age % 2) !== 0) {
    console.log("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
    console.log("Perfect square!");
}

