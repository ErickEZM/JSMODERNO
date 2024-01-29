const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 2000,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

// Destructuring - Extrae el valor y crea la variable
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);