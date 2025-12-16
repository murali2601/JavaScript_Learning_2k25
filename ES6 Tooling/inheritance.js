

class Base{
    constructor(color)
    {
        this.color = color;
    }
    move()
    {
        console.log(this.color);
    }
}

class Derived extends Base{
    constructor(color)
    {
        super(color); // always need to call super class while inheriting from parent class
    }
    draw()
    {
        console.log('Drawing ...');
    }
}

const d = new Derived('blue');
d.move();
console.log(d.color);