// Con local storage puedo apagar todo y persisten los datos
// Con session storage se pierden los datos despues de cerrar el navegador

localStorage.setItem('nombre', 'Juan');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
}

// JSON.stringify convierte objetos y arreglos a string
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero' , 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));
