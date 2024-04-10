const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); // Evita que el navegador ejecute la accion por default (no envia los datos por metodo POST)
    console.log('Consultar una api');
    console.log(e.target.method);
}