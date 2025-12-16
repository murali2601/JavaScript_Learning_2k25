class Circle{
    constructor(radius)
    {
        this.radius = radius;
    }

    draw(){
        console.log('Drawing...');
        return this.radius;
    }
}

module.exports = Circle;