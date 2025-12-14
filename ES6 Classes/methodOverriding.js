
class Shape{
    move()
    {
        console.log('Move');
    }
}

class Circle extends Shape{
    move()
    {
        super.move(); // shape move() will execute from derived class 
        console.log('Circle Move');
    }
}

const c = new Circle();
c.move(); // circle move() will execute
/* 
OUTPUT : 
PS D:\Programing languages\JavaScript\JS Learning\ES6 Classes> node .\methodOverriding.js
Move
Circle Move */