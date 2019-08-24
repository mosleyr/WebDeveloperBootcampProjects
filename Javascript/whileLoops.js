// print all numbers between -10 and 19
var num1 = -10;
while (num1 <= 19)
{
    console.log("num1 = " + num1);
    num1++;
}

// print all even numbers between 10 and 40
var num2 = 10;
while (num2 <= 40)
{
    console.log("num2 = " + num2);
    num2+=2;
}

// print all odd numbers between 300 and 333
var num3 = 300;
num3++;
while (num3 <= 333)
{
    console.log("num3 = " + num3);
    num3+=2;
}

// print all numbers divisible by 5 AND 3 between 5 and 50
var num4 = 5;
while (num4 <= 50)
{
    if ((num4 % 3 === 0) && (num4 % 5 === 0))
    {
        console.log("num4 = " + num4);
    }
    num4++;
}