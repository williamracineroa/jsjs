const number1= 3
const number2= 5

console.log(
    number1 + number2,
    number1 - number2,
    number1 * number2,
    number1 / number2
);


//--------------------------------------------------------

const age = 20

let futureAge = prompt("¿Cuántos años quieres sumar a tu edad?") // this is used to ask the user for a number to add to their age

futureAge = parseInt(futureAge) // this is used to convert the string input from the user to an integer

console.log("Tu edad futura será: " + (age + futureAge)) // this is used to print the future age of the user by adding the current age and the number they entered



//--------------------------------------------------------

let numero = prompt("escribe un numero")

if (numero % 2 === 0){
    console.log("el numero" + numero + "es par.");
    }else{
    console.log("el numero"+ numero + "es impar.");
    
    }



//--------------------------------------------------------

for (let i= 0; i < 11; i++){

    console.log("5 x " + i + " = " + (5 * i)) // this is used for print the value of i in each iteration of the loop, in this case it will print numbers from 0 to 9

}



//--------------------------------------------------------

for ( let i = 0;i < 30; i++){

    console.log(i+1) // this is used for print the value of i in each iteration of the loop, in this case it will print numbers from 0 to 99
}

//--------------------------------------------------------
let nu = 1
while (nu < 6) {
    console.log(nu)
    nu++ // this is used to increase the value of nu by 1 in each iteration of the loop
if (nu === 6) { 
    break;
}
}

//--------------------------------------------------------

let n = 10
while (n > 0) {
    console.log(n)
    n-- // this is used to decrease the value of n by 1 in each iteration of the loop
if (n === 0) {
    break;
    }
}



//--------------------------------------------------------


for (let i = 0; i < 20; i++) {

    if (i % 3 === 0) {
        console.log("FIZZ")} // this is used for print the value of i in each iteration of the loop, in this case it will print even numbers from 0 to 19
    else if (i % 5 === 0) {
        console.log("BUZZ") // this is used for print the value of i in each iteration of the loop, in this case it will print odd numbers from 0 to 19 
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ") // this is used for print the value of i in each iteration of the loop, in this case it will print numbers that are multiples of both 3 and 5 from 0 to 19

    }   
    else {
        console.log(i) // this is used for print the value of i in each iteration of the loop, in this case it will print numbers that are not multiples of 3 or 5 from 0 to 19
    } 
}


