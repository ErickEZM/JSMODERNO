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
const producto3 = {
    nombre: "Teclado",
    precio: 100
}

// Agregar al final del arreglo // Forma Imperativa
carrito.push(producto);
carrito.push(producto2);

// Agregar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);