// using concat() method we can combine two different arrays

const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);

const sliced = combined.slice(2,4); // (from start index, till end index);
console.log(sliced);
/* 
OUTPUT 

[ 1, 2, 3, 4, 5, 6 ]
[ 3, 4 ] */