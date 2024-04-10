const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
console.log(encabezado.innerText); // No  encuentra un texto con la propiedad visibility hidden de CSS
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); // Se trae el HTML


const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

