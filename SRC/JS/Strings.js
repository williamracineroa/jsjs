const name = "John Doe";
const age = 30;

// template literals

const mansaje2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(mansaje2)


console.log(mansaje2.length) // this is used for count the number of characters in the string, including spaces

console.log(mansaje2.toUpperCase()) // this is used for convert all characters to uppercase

console.log(mansaje2.toLowerCase()) // this is used for convert all characters to lowercase

console.log(mansaje2.includes("John")) // this is used for check if the string contains a specific substring, in this case "John"

console.log(mansaje2.replace("John", "Jane")) // this is used for replace a specific substring with another, in this case "John" with "Jane"

console.log(mansaje2.split(" ")) // this is used for split the string into an array of substrings based on a specified separator, in this case a space " "

console.log(mansaje2.trim()) // this is used for remove whitespace from both ends of the string