
iniciarApp();

function iniciarApp() {
    console.log("Iniciando app..");
    segundaFuncion();
}

function segundaFuncion() {
    console.log("Desde la segunda funcion...");
    usuarioAutenticado("Pablo");
}

function usuarioAutenticado(nombre) {
    console.log("Autenticando usuario...");
    console.log(`Usuario autenticado exitosamente: ${nombre}`);
}