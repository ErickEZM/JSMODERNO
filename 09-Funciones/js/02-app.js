// Declaracion de funcion (Function Declaration)

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
// Expresion de funcion (Function Expression)
const sumar2 = function() {
    console.log(2 + 3);
}

/* JavaScript primero da una vuelta y guarda las declaraciones de variables y funciones y despues da otra
vuelta donde las ejecuta es por eso que en la segunda declaracion de la funcion no se ejecuta si se invoca antes 
de la declaracion se le conoce como Hoisting */
const sumar = 0;
sumar2();
sumar2 = function() {

}

