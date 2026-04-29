const name = "John Doe" // :string // string type variable // let is used for not change valor 

let age = 30 // :number  // number type variable // let is used for change valor 

const isStudent = true; // :boolean //boolean type variable

let y = null; // :null // vacio

const big = 545465435134n; // big: bigint // is used for number very big

const not_change = Symbol("123"); // :symbol // is used for place a identifier a only valor with this "id" 

// example of Symbol :

// const CLAVE_INTERNA = Symbol("123");


// let usuario = {
//    nombre: "Alex",
//    [CLAVE_INTERNA]: "Datos encriptados" // Usamos el Symbol como clave
//  };

// Alguien intenta cambiar los datos usando el string "123"
// usuario["123"] = "Hackeado"; 

// console.log(usuario[CLAVE_INTERNA]); // "Datos encriptados" (¡Sigue intacto!)
// console.log(usuario["123"]);        // "Hackeado" (Se creó una propiedad nueva, no tocó el Symbol)

console.log (isStudent)
console.log (typeof not_change) // is used for imput the type data 

