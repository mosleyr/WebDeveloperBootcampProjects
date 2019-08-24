window.setTimeout(function() {

var todos = ["Sweep floor"];
var input = prompt("What would you like to do?");

// while answer is not quit
while(input !== "quit") {
    // if list is typed
    if(input === "list") {
        console.log(todos);
    }
    // if new is typed
    else if(input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    input = prompt("What would you like to do?");
}
console.log("You have quit the app");

}, 500);
