// Unir 2 objetos

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 2000,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medidad: "1m"
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas}
console.log(resultado2);