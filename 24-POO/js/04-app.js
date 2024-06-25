class Cliente {

    // Hace la propiedad privada es decir solo se puede acceder dentro de la clase
    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const juan = new Cliente();
juan.setNombre('Juan');
console.log(juan.getNombre());
// console.log(juan.#nombre);