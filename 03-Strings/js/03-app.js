const producto = "Monitor 20 Pulgadas ";
const precio = "30 usd";

// Metodo para unir dos strings
console.log(producto.concat(precio));
console.log(producto.concat("en descuento"));

// Concatenar multiples strings 
console.log(producto + "con un precio de: " + precio);

console.log("El producto " + producto + "tiene un precio de: " + precio);

console.log(`El producto ${producto}tiene un precio de: $${precio}`);
