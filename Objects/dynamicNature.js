// dynamic nature means ability to aadd or delete data in an object (even it is non mutable)

const circle = {
    radius : 1
}

circle.color = 'blue';
circle.draw = () => {
    console.log("Drawing ...");
}

console.log(circle.color);
circle.draw();

delete circle.color;
delete circle.draw;

//wont work after delete operator
/* console.log(circle.color);
circle.draw(); */
