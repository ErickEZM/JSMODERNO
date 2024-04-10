const primerEnlace = document.querySelector('a');
primerEnlace.remove(); // Elimar elemento con .remove

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]); // Eliminar desde el padre