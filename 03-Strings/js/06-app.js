const producto = 'Monitor 20 Pulgadas';

// .repeat permite repetir una cadena de texto
const texto = "en Promocion ".repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!`);

// Si a .repeat le pasas un numero que no es entero, lo redondea.

// .split permite dividir un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar musica, escribir, programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModerno";
console.log(tweet.split("#"));