const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 2000,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

// Destructuring - Extrae el valor y crea la variable
const { nombre } = producto;
console.log(nombre);

// Destructuring con arreglos
const numeros = [10,20,30,40,50];

const [ primero, ...tercero] = numeros; // En los arreglos tu decides el nombre a diferencia del objeto

console.log(primero);
console.log(tercero);