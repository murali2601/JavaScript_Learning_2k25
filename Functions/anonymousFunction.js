//these are functions without name and can be used in some places where reuse of functions is no needed

// 1. Example of sameple nameless function

let sum = function(x,y)
{
    return x+y;
}

console.log(sum(2,3)); //5

// 2. usage in callback function 

setTimeout(function()
{
    console.log("This will be printed after 3 seconds ... "); // this will executed at last due to time delay
},3000);

// 3. Immediately invoked function expression (IIFE)

(function()
{
    console.log("plain function without function name or expression ... ");
}) ();