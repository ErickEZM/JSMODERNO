const producto = 'Monitor 20 Pulgadas';

// .replace para reemplazar (texto que se quiere reemplazar, texto que se quiere poner)
console.log(producto);
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); // No hace nada

// Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2, 1)); // Lo modifica

/* La diferencia es que si les pasas un numero mayor al inicio .slice no hace nada 
mientras que substing lo modifica e intercambia los valores */

// Corta una letra del texto
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));