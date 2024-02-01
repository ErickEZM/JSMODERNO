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

let resultado;
// Forma declarativa
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);