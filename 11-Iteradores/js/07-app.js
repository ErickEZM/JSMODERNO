const pendientes = ["Tarea", "Comer", "Trabajar", "Estudiar JavaScript"];

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Tablet", precio: 300},
    {nombre: "Teclado", precio: 20},
    {nombre: "Celular", precio: 800},
    {nombre: "Audifonos", precio: 50},
]

// For of itera sobre arreglos
for(let producto of carrito) {
    console.log(producto.nombre);
}