// reduce() method is used to sum up all the array elements

const numbers = [1,-1,2,3];

const sum = numbers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
})

console.log(sum); // 5 as a total

const strings = ['Hallo', 'ich','bin','Murali'];

const combined = strings.reduce((a,b) => {

    return a + b;
    
});

console.log(combined);