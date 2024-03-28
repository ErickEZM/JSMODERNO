const pendientes = ["Tarea", "Comer", "Trabajar", "Estudiar JavaScript"];

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`)
})

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Tablet", precio: 300},
    {nombre: "Teclado", precio: 20},
    {nombre: "Celular", precio: 800},
    {nombre: "Audifonos", precio: 50},
]

const nuevoArreglo = carrito.forEach((producto) => producto.nombre);

console.log(nuevoArreglo);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo2);