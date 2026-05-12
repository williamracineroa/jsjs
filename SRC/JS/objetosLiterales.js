const coder = {
        nombre: "Alex",
        edad: 30,
        esEstudiante: true,
        habilidades: ["JavaScript", "Python", "C++"],
        direccion: {
        calle: "123 Main St",
        ciudad: "Ciudad Ejemplo",
        pais: "País Ejemplo"
    }
}

console.log(coder)
console.log(coder.nombre) // Alex
console.log(coder.edad ) // 30
console.log(coder.esEstudiante) // true 
console.log(coder.habilidades[0]) // JavaScript
console.log(coder.direccion.ciudad) // Ciudad Ejemplo

// para cambiar el valor de una propiedad
console.log(coder.edad = 31)
console.log(coder.edad) // 31

// para agregar una nueva propiedad
coder.email = "alex@example.com"
console.log(coder.email) // alex@example.com

// para eliminar una propiedad
delete coder.direccion
console.log(coder) // undefined   