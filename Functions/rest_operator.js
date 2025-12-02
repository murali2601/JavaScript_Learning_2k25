//The Rest operator  ...parameter

function sum(...parameter)
{
    return parameter.reduce((a,b) => a+b);
}

console.log(sum(1,2,3,4,5));


// Can have parameters like this with rest operator

function sum_1(...parameter_1)
{
    return parameter_1.reduce((a,b) => a+b);
}

console.log(sum_1(1,2,3,4,5,10));

//but cannot be like this, after rest operator

function sum_2(...parameter_2, parameter 3) // throws error
{
    return parameter_2.reduce((a,b) => a+b);
}

console.log(sum_2(1,2,3,4,5,10));