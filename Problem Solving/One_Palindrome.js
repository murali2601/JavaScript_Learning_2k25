//Palindrome

let inputText = "Madam";

let convertedText = inputText.toLowerCase();

let reversed = convertedText
                .split('')
                .reverse()
                .join('');

console.log(convertedText === reversed);
console.log(convertedText);
console.log(reversed);