var comments = {};

comments.data = ["Good job!", "Bye", "Lame..."];

function print(arr) {
    arr.forEach(function(el) {
        console.log(el);
    });
}

comments.print = function() {
    this.data.forEach(function(el){
        console.log(el);
    });
}