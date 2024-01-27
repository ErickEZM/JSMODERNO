const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20.2;

// Convertir string a numero entero
console.log(Number.parseInt(numero1));

// Convertir string a numero decimal
console.log(Number.parseFloat(numero2));

// Imprime NAN porque no es un numero
console.log(Number.parseInt(numero3));

// Revisar si un numero es entero o no
console.log(Number.isInteger(numero4));