// using filter() method we can filter the necessay elements in an array

const numbers = [1,-1,2,3,-4];

// we should pass the function as an argument or else it will throw an error
const filtered = numbers.filter( num => num>=0); // filter for only positive numbers
console.log(filtered); // [ 1, 2, 3 ]