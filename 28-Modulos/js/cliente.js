export const nombreCliente = 'Erick';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro de ${ahorro}`;
}

export function tienesSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tienes saldo');
    } else {
        console.log('No tienes saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro de ${this.ahorro}`;
    }
}

// No puedes tener 2 export default
export default function nuevaFuncion() {
    console.log('Este es el export default');
}