/* callback functions are used to execute after main function gets executed, 
they can be passed as a parameter to another function

 */

function display(result)
{
    console.log(`The sum of the two numbers is ${result}`);
}

function calculate(num1,num2,myCallback)
{
    let sum = num1 + num2;

    myCallback(sum); // will execute after calculate()
}

calculate(2,3,display); // 5