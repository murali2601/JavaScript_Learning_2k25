class Circle{
    constructor(radius)
    {
        this.radius = radius;
    }

    draw(){
        console.log('Drawing circle with radius ' + this.radius);
    }
}

module.exports = Circle;