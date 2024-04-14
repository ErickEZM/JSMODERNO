const nombre = localStorage.getItem('nombre');
console.log(nombre);

// JSON.parse convierte el string en objeto o arreglo segun sea el caso
const productoJSON = localStorage.getItem('producto');
const producto = JSON.parse(productoJSON);
console.log(producto);

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));