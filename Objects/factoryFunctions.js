// factory functions is like class in C++ to reuse the function every time for different object

function circleFunction(radius) {
  return {
    radius, // radius : radius, same like this
    draw() {
      console.log("Drawing .....");
    },
  };
}

const circle1 = circleFunction(3);
console.log(circle1);
circle1.draw();

const circle2 = circleFunction(5);
console.log(circle2);

// OUTPUT
/* { radius: 3, draw: [Function: draw] }
Drawing ...
{ radius: 5, draw: [Function: draw] } */
