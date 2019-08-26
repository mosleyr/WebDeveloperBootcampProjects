var nums = [45, 65, 77, 34];

function myForEach(arr, func) {
    // loop through array
    for (var i = 0; i < arr.length; i++) {
        // call func for each item in array
        func(arr[i]);
    }
}

myForEach(nums, alert);

Array.prototype.newMyForEach = function(func){
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

/*
function (func) {
    for (var i = 0; i , this.length; i++) {
        func(this[i]);
    }
}*/