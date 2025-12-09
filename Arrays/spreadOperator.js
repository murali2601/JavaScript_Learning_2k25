// ... operator is used to fetch all the elements in an array and can have a visual representation of the output of array

const first = [1,2,3];
const second = [4,5,6];

const combined = [...first,...second];
console.log(`Combined array : ${combined}`);

const copy = [...combined,'a','b']; // we can also copy an array using spread operator
console.log(`Copied array : ${copy}`);

/* 
OUTPUT : 
Combined array : 1,2,3,4,5,6
Copied array : 1,2,3,4,5,6,a,b */