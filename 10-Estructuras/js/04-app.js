// Operador mayor que y menor que

const dinero = 200 ;
const totalPagar = 500;
const tarjeta = true;
const cheque = true;

if(dinero >= totalPagar) {
    console.log("Si podemos pagar");
} else if(cheque) {
    console.log("Si tengo un cheque");
} else if(tarjeta) {
    console.log("Si puedo pagar porque tengo la tarjeta");
} else {
    console.log("Fondos insuficientes");
}