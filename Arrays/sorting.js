// using sort() method we can sort the array

const numbers = [4,1,3,2];

const sorted = numbers.sort();
console.log(sorted); //[ 1, 2, 3, 4 ]
console.log(typeof sorted); //object

// same we have reverse() method to reverse 

const reversed = numbers.reverse();
console.log(reversed); //[ 4, 3, 2, 1 ]

// but if it an array of objects these methods wont work

const course = [
    {id : 1, name : "Node js"},
    {id : 2, name : "Java Script"},
];

course.sort((a,b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
console.log(course);