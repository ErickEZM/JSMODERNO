// Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // No requieren una instancia ya que pertenece a la clase no al objeto
    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}


const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion());
console.log(juan);

console.log(Cliente.bienvenida());


// Class Expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2.mostrarInformacion());
console.log(juan2);

// Los prototypes vienen siendo los metodos