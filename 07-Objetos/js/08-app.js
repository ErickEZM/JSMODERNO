// Evalua el codigo de JS de manera estricta
"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 2000,
    disponible: true
}

Object.freeze(producto); // No permite modificar, agregar y eliminar las propiedades

// console.log(producto);
// producto.imagen = "imagen.jpg";

console.log(producto);
console.log(Object.isFrozen(producto)); 
