const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 2000,
    disponible: true
}

// Los valores de los objetos si se pueden cambiar aunque sea const
producto.disponible = false;

delete producto.precio;

console.log(producto);