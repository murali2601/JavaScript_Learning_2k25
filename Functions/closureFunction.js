// closure in JS keeps the variable in memory until any other function() inside the closure function is using it

function fun_1()
{
    let age = 24;

    function fun_2()
    {
        console.log(age);
    }

    age = 25; // uses updated value inside closure function

    return fun_2;
}

// we can call both ways 
const result = fun_1();
result(); // 25

fun_1()(); // 25



//var vs let in closure

for(var i = 0;i<3;i++)
{
    setTimeout(() => console.log(i),1000); //3 3 3
}

setTimeout(() => console.log(`------------------------------`),1500);

for(let j = 0;j<3;j++)
{
    setTimeout(() => console.log(j),2000); // 0 1 2
}