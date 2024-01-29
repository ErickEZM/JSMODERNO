const producto = {
    nombre: "Monitor de 20 pulgadas", // Propiedad o llave del objeto - Valor
    precio: 2000,
    disponible: true
}

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);