// cloning of objects without referencing can be done in 3 methods

const circle = {
    radius : 1,
    draw () 
    {
        console.log('draw');
    }
};



//METHOD 1 : using for in loop

const another = {};

for(let key in circle)
    another[key] = circle[key];

console.log(another);

//METHOD 2 : using Object.assign()

const another = Object.assign({},circle);

console.log(another);

//METHOD 3 : using spread operator

const another = {...circle};

console.log(another);