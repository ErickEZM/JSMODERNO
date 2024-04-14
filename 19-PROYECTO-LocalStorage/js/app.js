// Variables
const formulario = document.querySelector('#formulario');
const listaTwetts = document.querySelector('#lista-tweets');
let tweets = [];

// Events Listeners
eventsListener();

function eventsListener() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets') || []);
        
        crearHTML(tweets);
        
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();


    // TextArea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        return; // Evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet

    }
    
    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // Crear HTML
    crearHTML(tweets);

    // Reiniciar el formulario
    formulario.reset();
}

function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertando en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        // Elimina la alerta
        mensajeError.remove(error);
    }, 3000);

}

// Muestra un listado de los tweets
function crearHTML(tweets) {

    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach(tweet => {

            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('LI');
            li.textContent = tweet.tweet;

            // Asignar el boton
            li.appendChild(btnEliminar);

            // Agregarlo al HTML
            listaTwetts.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega los tweets actuales a local storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML(tweets);
}

function limpiarHTML() {

    while (listaTwetts.firstChild) {
        listaTwetts.removeChild(listaTwetts.firstChild);
    }
}