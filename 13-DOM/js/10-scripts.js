const enlace = document.createElement('A');

// Agregando el texto
enlace.textContent = "Nuevo Enlace";

// Agregando href
enlace.href = "/nuevo-enlace";

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;

// Seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace); // Lo coloca al final de los hijos
navegacion.insertBefore(enlace, navegacion.children[1]); // Toma 2 argumentos (Elemento y en que lugar se quiere mostrar)

function miFuncion() {
    alert("Diste Click");
}

// Crear un card de forma dinamica
const parrafo1 = document.createElement('P');
parrafo1.textContent = "Concierto";
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('P');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('P');
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add('precio');
console.log(parrafo3);

// Crear div con la clase de info
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement("DIV");
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

// Asignar info
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
