// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {

        if(localStorage.getItem('presupuesto') === null) {
            preguntarPresupuesto();
        } else {
            presupuestoDatos = JSON.parse(localStorage.getItem('presupuesto'));
            presupuesto = new Presupuesto(presupuestoDatos.presupuesto);
            presupuesto.restante = presupuestoDatos.restante;
            presupuesto.gastos = presupuestoDatos.gastos || [];

            ui.insertarPresupuesto(presupuesto);
            ui.mostrarGastos(presupuesto.gastos);
        }
        
    });

    formulario.addEventListener('submit', agregarGasto)
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        console.log(gasto);
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }   

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    
    insertarPresupuesto(cantidad) {

        // Extrayendo los valores
        const {presupuesto, restante} = cantidad;

        // Agregar el HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

    mostrarGastos(gastos) {

        this.limpiarHTML(); // Elimina el HTML previo
        
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;
            
            // Crear un li
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = ` ${nombre} <span class="badge badge-primary badge-pill"> $${cantidad} </span>`;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('BUTTON');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);


            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);

        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');


        // Comprobar 25%
        if((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }
        
        // Si el total es 0 o menor
        if(restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } else {
            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }
    
}

// Intanciar
const ui = new UI;
let presupuesto;

// Funciones
function preguntarPresupuesto() {

    presupuestoUsuario = prompt('¿Cuanto es tu presupuesto?');
    
    if(presupuestoUsuario === ''  || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

    sincronizarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    // Gener un objeto con el gasto // Se le conoce Object Literal Enhanced
    const gasto = {nombre, cantidad, id: Date.now()};

    if(presupuesto.restante - gasto.cantidad < 0) {
        ui.imprimirAlerta('No tienes suficiente presupuesto', 'error');
    } else {
        // Añade un nuevo gasto
        presupuesto.nuevoGasto(gasto);

        sincronizarPresupuesto(presupuesto);

        // Mensaje todo bien
        ui.imprimirAlerta('Gasto agregado correctamente');

        // Imprimir los gastos
        const {gastos, restante} = presupuesto;
        ui.mostrarGastos(gastos);

        ui.actualizarRestante(restante);

        ui.comprobarPresupuesto(presupuesto);
    }
    

    // Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id) {

    // Elimina los gastos del objeto
    presupuesto.eliminarGasto(id);

    sincronizarPresupuesto(presupuesto);

    // Elimina los gastos del HTML
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}

function sincronizarPresupuesto(presupuestoObj) {
    presupuestoObjString = JSON.stringify(presupuestoObj);
    localStorage.setItem('presupuesto', presupuestoObjString);

}
