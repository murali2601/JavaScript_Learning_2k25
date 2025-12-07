// construction functions is like creating objects, like every function is an object

function Circle(radius)
{
    this.radius = radius;
    this.draw = () => {
        console.log("Drawing ... " + " with radius " + radius);
    }
}

const circle = new Circle(3);
circle.draw();