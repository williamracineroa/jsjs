// arrays : is used for save multiple values in a single variable with list format

const fruits = ["apple", "banana", "orange"]; // array of strings

console.log(fruits[0]) // this is used for access the first element of the array, in this case "apple"

console.log(fruits.length) // this is used for count the number of elements in the array, in this case 3

fruits.push("grape") // this is used for add a new element at the end of the array, in this case "grape"

console.log(fruits) // this is used for print the array with the new element added, in this case ["apple", "banana", "orange", "grape"]

fruits.pop() // this is used for remove the last element of the array, in this case "grape"

console.log(fruits) // this is used for print the array with the last element removed, in this case ["apple", "banana", "orange"]

fruits.unshift("kiwi") // this is used for add a new element at the beginning of the array, in this case "kiwi"

console.log(fruits) // this is used for print the array with the new element added at the beginning, in this case ["kiwi", "apple", "banana", "orange"]

fruits.shift() // this is used for remove the first element of the array, in this case "kiwi"

console.log(fruits) // this is used for print the array with the first element removed, in this case ["apple", "banana", "orange"]