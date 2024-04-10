let elemento;

elemento = document.all; // Selecciona todo el documento
elemento = document.head; // Selecciona la parte del header
elemento = document.body; // Seleccion la parte del body
elemento = document.domain; // Nos da el dominio de la pagina
elemento = document.forms; // Selecciona los formularios de la pagina
elemento = document.forms[0]; // Selecciona un formulario
elemento = document.forms[0].id; 
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links; // Selecciona los links de la pagina
elemento = document.links[4]; // Selecciona un link de la pagina 
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;

console.log(elemento);