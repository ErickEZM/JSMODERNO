const carrito = [];

// Derfinir un producto
const producto = {
    nombre: "Monitor de 30 pulgadas",
    precio: 3000
}
const producto2 = {
    nombre: "Celular",
    precio: 3000
}
const producto4 = {
    nombre: "Celular 2",
    precio: 1000
}

// Agregar al final del arreglo
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: "Teclado",
    precio: 100
}

// Agregar al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito);

/* // Eliminar elementos de un arreglo
carrito.pop();
console.log(carrito);

// Eliminar del inicio del arreglo
carrito.shift(carrito);*/

// Eliminar elementos de un arreglo (indice que se desea eliminar, cuantos elementos se quieren eliminar)
carrito.splice(0, 1);
console.log(carrito); 