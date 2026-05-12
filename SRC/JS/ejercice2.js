const products = [];
let menu = "";

while (menu !== "4") {
   menu = prompt(
    "Que accion desea realizar?" +
      "\n1. Agregar producto" +
      "\n2. Mostrar productos" +
      "\n3. Eliminar producto" +
      "\n4. Salir",
  );
  

  if(menu === "1") {
    let productName = prompt("Ingrese el nombre del producto:");
    if ( products.includes(productName)){
      alert("El producto ya existe!");
  }
    else {
    products.push(productName);
    console.log("Producto agregado: " + productName);
    
    }
}
  else if (menu === "2") {
    for (let i = 0; i < products.length; i++) {
      console.log( products[i]);
      if (products.length === 0) {
        console.log("No hay productos en la lista.");
      }
      
    }
    console.log(products.length);
    } 
  else if (menu === "3") {
    let productToRemove = prompt("Ingrese el nombre del producto a eliminar:");
    if (products.includes(productToRemove)) {
      products.splice(products.indexOf(productToRemove), 1);
      console.log("Producto eliminado: " + productToRemove);
    } 
    else {
      console.log("Producto no encontrado: " + productToRemove);
    }
    } 
  else if (menu === "4") {
    break;
  }
  else {
    console.log("Opcion no valida, por favor intente de nuevo.");
  }
}
