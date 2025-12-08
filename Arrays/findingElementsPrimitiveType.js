/* For finding elements in an array of primitive type, we use
    1. indexOf(element_to_be_found, from_index_to_search)
    2. lastIndexOf(element_to_be_found) - finds the last occurance of element
 */

const numbers = [1,2,3,1,4];


console.log(numbers.indexOf(1,2)); // 3 index
console.log(numbers.lastIndexOf(1))// 3 index
console.log(numbers.indexOf(1) !== -1); //true
console.log(numbers.includes(1)); //true