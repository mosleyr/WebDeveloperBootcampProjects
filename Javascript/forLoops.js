// print all numbers between -10 and 19
for (var num1 = -10; num1 <= 19; num1++)
{
    console.log("num1 = " + num1);
}

// print all even numbers between 10 and 40
/*
for (var num2 = 10; num2 <= 40; num2+=2)
{
    console.log("num2 = " + num2);
}
 */
for (var num2 = 10; num2 <= 40; num2++)
{
    if (num2 % 2 === 0)
    {
        console.log("num2 = " + num2);
    }
}

// print all odd numbers between 300 and 333
/*
for (var num3 = 301; num3 <= 333; num3+=2)
{
    console.log("num3 = " + num3);
}
*/
for (var num3 = 300; num3 <= 333; num3++)
{
    if (num3 % 2 !== 0)
    {
        console.log("num3 = " + num3);
    }
}

// print all numbers divisible by 5 AND 3 between 5 and 50
for (var num4 = 5; num4 <= 50; num4++)
{
    if ((num4 % 3 === 0) && (num4 % 5 === 0))
    {
        console.log("num4 = " + num4);
    }
}