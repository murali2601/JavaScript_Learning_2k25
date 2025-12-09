// using join() we can add a string (',') or anything between elements in an array

const numbers = [1,2,3,4,5];

const joined = numbers.join(',');
console.log(joined); //1,2,3,4,5

// we can also split the words in string using split() method

const text = "This is my string";

const parts = text.split(' ');
console.log(parts); //[ 'This', 'is', 'my', 'string' ]

// now we can join them using '-' hyphen

const combined = parts.join('-');
console.log(combined); //This-is-my-string