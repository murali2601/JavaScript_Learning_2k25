
class Circle{
    constructor(radius)
    {
        this.radius = radius;
        this.move = () => {}
    }
    draw() 
    {
        console.log('drawing ...');
    }
}

const obj1 = new Circle(3);

console.log(typeof obj1); // object
console.log(typeof obj1.radius); //number
console.log(typeof obj1.move); //function
console.log(typeof obj1.draw); //function
console.log(typeof Circle); //function
console.log(obj1.radius); //3

const obj2 = new Circle(5);
console.log(obj2.radius);
obj2.draw();    
