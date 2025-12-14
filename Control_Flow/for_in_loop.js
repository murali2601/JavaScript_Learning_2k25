// for in loops used to iterate over objects or arrays

const person = {
    name : 'Murali',
    age : 24
};

for (let key in person)
    console.log(`The ${key} is ${person[key]}`);


const color = ['red', 'blue', 'green'];

for (let index in color)
    console.log(`The ${index} index is ${color[index]}`);

console.log(typeof color[0]); // string  -> for in loop