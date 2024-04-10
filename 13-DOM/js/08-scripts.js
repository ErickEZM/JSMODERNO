const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.firstElementChild); // Trae el primer elemento de la navegacion
console.log(navegacion.lastElementChild); // Trae el ultimo elemento de la navegacion
console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
console.log(navegacion.children); // Recorre los hijos y lista elementos reales 


console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

card.children[1].children[1].textContent = "Nuevo Heading"

card.children[0].src = "img/hacer3.jpg";

console.log(card.children[0].src);

// Traversing de hijo al padre
console.log(card.parentElement); // Recorre hacia el padre

console.log(card)
console.log(card.nextElementSibling); // Selecciona el hermano del primer hijo
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);
