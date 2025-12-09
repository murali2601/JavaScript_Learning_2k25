// same like add elements, we have 3 inbuild methods

const numbers = [1,2,3,4,5];

//End

const last = numbers.pop(); // return the last element being removed
console.log(last);

//Beginning

const first = numbers.shift(); // returns the first element in array being removed
console.log(first);


//reomving from middle 

numbers.splice(2,2); // (index of array, no. of elements to be removed from that index)
console.log(numbers); 
/* 
OUTPUT : 

PS D:\Programing languages\JavaScript\JS Learning\Arrays> node '.\removing Elements.js'
5
PS D:\Programing languages\JavaScript\JS Learning\Arrays> node '.\removing Elements.js'
1
PS D:\Programing languages\JavaScript\JS Learning\Arrays> node '.\removing Elements.js'
[ 1, 2, 5 ] */