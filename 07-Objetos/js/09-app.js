// Evalua el codigo de JS de manera estricta
"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 2000,
    disponible: true
}

/* Te permite modificar las llaves existentes de un 
objeto pero no permite agregar nuevas ni eliminarlas */
Object.seal(producto); 

producto.disponible = false;

console.log(producto);
console.log(Object.isSealed(producto));