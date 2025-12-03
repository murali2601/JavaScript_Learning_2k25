// var is function scope or global scope
// let is block scope, like if{}, for{}, etc


/* USING LET */
function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // error
}

start();

/* USING VAR */
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // no error
}
console.log(i); // not accessible outside global scope
start();
