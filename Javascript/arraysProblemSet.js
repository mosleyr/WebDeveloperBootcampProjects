
// printReverse
var myArray = [1, 2, 3, 4];
function printReverse(myArray) {
    for (var i = myArray.length - 1; i >= 0; i--)
    {
        console.log(myArray[i]);
    }
}
printReverse(myArray);

// isUniform
function isUniform(anArray) {
    var uniform = true;
    for (var i = anArray.length; i > 1; i--) {
        if (anArray[i-1] !== anArray[i-2]) {
            uniform = false;
            return uniform;
        }
    }
    return uniform;
}
isUniform([1, 1, 1, 1]);
isUniform([1, 2, 2, 1]);

// sumArray
var sum = 0;
function sumArray(someArray) {
    for (var i = someArray.length; i > 0; i--) {
        sum = sum + someArray[i-1];
    }
    return sum;
}
sumArray([1, 2, 3, 4]);
sumArray([5, 10, 2, 4]);

// sumArrayForEach alternative
var sumFor = 0;
function sumArrayForEach(someArray) {
    someArray.forEach(function(item) {
        sumFor += item;
    });
    return sumFor;
}

// max
var maxNum = 0;
function max(maxArray) {
    maxNum = maxArray[maxArray.length - 1];
    for (var i = maxArray.length; i > 0; i--) {
        if (maxArray[i - 1] > maxNum) {
            maxNum = maxArray[i - 1];
        }
    }
    return maxNum;
}
max([10, 20, 8, 4]);

