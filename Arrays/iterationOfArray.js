// we can use forof loop just to iterate elements only

const numbers = [1,2,3,4,5];

for (let num of numbers)
    console.log(num);

console.log('\n');
// or we can use forEach loop to iterate over index and numbers(elements) in an array

numbers.forEach((num,index) => { // index should be passed as an second argument
    console.log(`Index of ${index} is ${num}`)
});
/* 
OUTPUT : 
1
2
3
4
5


Index of 0 is 1
Index of 1 is 2
Index of 2 is 3
Index of 3 is 4
Index of 4 is 5 */