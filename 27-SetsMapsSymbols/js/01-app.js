const carrito = new Set();

// Agrega elementos al set
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// No agrega valores que se duplican
carrito.add('Camisa');

// Eliminar elementos, retorna true si lo elimino y false si no existe el elemento 
carrito.delete('Disco #3');

// Comprueba si un elemento existe en el set, retorna true o false
console.log(carrito.has('Camisa'));

// Te muestra cuantos elementos hay en el set
console.log(carrito.size);

// Los sets son iterables, los sets solamente almacenan valores, el indice traera el mismo valor
carrito.forEach((producto, index) => {
    // console.log(producto);
    console.log(index);
});

// Elimina todos los elementos del set
// carrito.clear();

// console.log(carrito);

// Del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
