// factory functions is like class in C++ to reuse the function every time for different object

function circleFunction(radius) {
  return {
    radius, // radius : radius, same like this
    draw(value) {
      console.log(`Draw`);
    },
  };
}

const circle1 = circleFunction(3);
console.log(circle1);
console.log(circle1.draw);
