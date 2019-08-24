// isEven
function isEven(num) {
    if (num % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// factorial
function factorial(num) {
    if (num === 0)
    {
        return 1;
    }
    else
    {
        var count = num;
        while (count > 1)
        {
            num*=(count-1);
            count--;
        }
     return num;
    }
}

// kebabToSnake
function kebabToSnake(word) {
    var myString = word.replace(/-/g, "_");
    return myString;
}