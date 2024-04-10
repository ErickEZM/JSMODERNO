const nav = document.querySelector('.navegacion');

// Registrar un evento 

// mouseout - cuando entras y sales 
nav.addEventListener('mouseout', () => {
    console.log('Saliendo en nav');
    nav.style.backgroundColor = "Transparent";

});

// mousedown - similar al click
nav.addEventListener('mousedown', () => {
    console.log('Entrando en nav');
    nav.style.backgroundColor = "White";
});

// click
nav.addEventListener('click', () => {
    console.log('Entrando en nav');
    nav.style.backgroundColor = "White";
});

// dblClick - doble click
nav.addEventListener('dblclick', () => {
    console.log('Entrando en nav');
    nav.style.backgroundColor = "White";
});


// mouseup . cuando sueltas el mouse
nav.addEventListener('mouseup', () => {
    console.log('Entrando en nav');
    nav.style.backgroundColor = "White";
});