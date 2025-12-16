// static methods are not accessible with objects, they can be only accessible with class itself


class Circle{
    constructor(radius)
    {
        this.radius = radius;
    }
    draw() //Instance method
    {
        console.log('drawing ...');
    }

    static calculate(radius)
    {
        return 3.14*radius*radius;
    }
}

const area = Circle.calculate(5);
console.log(area);



