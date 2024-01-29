
// Object Literal
const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 2000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: $${this.precio}`)
    }
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

}

const producto2 = new Producto("Monitor de 24 pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Consola", 2000);
console.log(producto3);