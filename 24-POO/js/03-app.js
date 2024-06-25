// Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

// Herencia 
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        // Para heredar atributos del contructor tienes que usar super
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // Reescribe el metodo de la clase padre
        return 'Bienvenido al cajero de empresas';
    }
}

const juan = new Cliente('Erick', 400);
const empresa = new Empresa('EZMDev', 5000, 834298424, 'Cursos Web');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());