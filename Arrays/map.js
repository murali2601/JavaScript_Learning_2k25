/*  map() is used to iterate over array elements and transform them into something else, and stores
those transformed elements into different array without modifying previous version fo array */

const numbers = [1,2,3,4,5];

const doubled = numbers.map( num => num*2);
console.log(doubled);

// same can be done for strings of array

const names = ['Murali','Sivakumar'];

const modifiedNames = names.map(name => 'Mr.' + name);
console.log(modifiedNames);