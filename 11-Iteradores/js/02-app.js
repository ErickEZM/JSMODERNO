// El continue rompe el ciclo donde estamos mientras que el break rompe totalmente el for

/* for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log("Cinco");
        continue;
    }
    console.log(`Numero: ${i}`);
    
} */

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 300, descuento: true},
    {nombre: "Teclado", precio: 20},
    {nombre: "Celular", precio: 800},
    {nombre: "Audifonos", precio: 50},
]

// Imprime todos los articulos del carrito, llega al articulo tablet, imprime que tiene descuento y lo salta
for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
    
}