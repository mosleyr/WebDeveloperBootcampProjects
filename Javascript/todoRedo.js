window.setTimeout(function() {

var todos = ["Sweep floor"];
var input = prompt("What would you like to do?");

// while answer is not quit
while(input !== "quit") {
    // if list is typed
    if(input === "list") {
        listTodos();
    }
    // if new is typed
    else if(input === "new") {
        addTodo();
    }
    // if delete is typed
    else if(input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("You have quit the app");

function listTodos() {
    console.log("****************");
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("****************");
}

function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("New Todo " + newTodo + " added.");
}

function deleteTodo() {
    // ask user for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");

    // delete the todo
    // asks which index to delete and defaults 1 to delete
    todos.splice(index, 1);
    console.log("Deleted Todo");
}

}, 500);
