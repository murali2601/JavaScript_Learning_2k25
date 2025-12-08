// manually we cant add/remove elements in an const array, but we can make use of inbult methods for array

const numbers = [3,4];

numbers.push(5,6); // insert at end

numbers.unshift(1,2); // insert at beg

numbers.splice(2,0,'a','b');

console.log(numbers);