// Selectores
const nombre = document.querySelector('#nombre');
const propietario = document.querySelector('#propietario');
const telefono = document.querySelector('#telefono');
const fecha = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const sintomas = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas');

const citaObj = {
    id: '',
    nombre: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', {

});

eventListeners();
function eventListeners() {
    nombre.addEventListener('change', datosCita);
    propietario.addEventListener('change', datosCita);
    telefono.addEventListener('change', datosCita);
    fecha.addEventListener('change', datosCita);
    hora.addEventListener('change', datosCita);
    sintomas.addEventListener('change', datosCita);
    formulario.addEventListener('submit', validarFormulario);
}

class Notificacion {
    constructor(tipo, mensaje) {
        this.tipo = tipo;
        this.mensaje = mensaje;

        this.mostrar();
    }

    mostrar() {

        const alerta = document.createElement('P');
        alerta.textContent = this.mensaje;
        alerta.classList.add('text-white', 'p-1', 'mt-3', 'alert');

        
        if(tipo === 'error') {
            alerta.classList.add('bg-red');
        } else {
            alerta.classList.add('bg-green');
        }

        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        formulario.children[0].appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
        
    }


}

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregar(cita) {
        this.citas = [...this.citas, cita];
        console.log(this.citas);
        this.mostrar();
    }

    editar() {

    }

    eliminar() {

    } 

    mostrar() {

        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
        
        
        this.citas.forEach(cita => {

            const divCita = document.createElement('div');
            divCita.classList.add('my-10', 'bg-gray', 'shadow-md', 'py-10' ,'rounded-xl', 'p-2', 'mb-3');

            const nombre = document.createElement('P');
            nombre.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.nombre}`;

            const propietario = document.createElement('P');
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const telefono = document.createElement('P');
            telefono.innerHTML = `<span class="font-bold uppercase">Telefono: </span> ${cita.telefono}`;

            const fecha = document.createElement('P');
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const hora = document.createElement('P');
            hora.innerHTML = `<span class="font-bold uppercase">Hora: </span> ${cita.hora}`;

            const sintomas = document.createElement('P');
            sintomas.innerHTML = `<span class="font-bold uppercase">Sintomas: </span> ${cita.sintomas}`;

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo', 'hover:bg-indigo', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = () => {
                
            }

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => {

            }

            const contenedorBotones = document.createElement('DIV');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red', 'hover:bg-red', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            contenedorBotones.classList.add('contenedor-botones');
            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            divCita.appendChild(nombre);
            divCita.appendChild(propietario);
            divCita.appendChild(telefono);
            divCita.appendChild(fecha);
            divCita.appendChild(hora);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            contenedorCitas.appendChild(divCita);
        });
    }
}

function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

const cita = new AdminCitas();

function validarFormulario(e) {
    e.preventDefault();

    if(Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion (
            tipo = 'error',
            mensaje = 'Todos los campos son obligatorios'
        )

        return;
    }

    cita.agregar({...citaObj});

    new Notificacion (
        tipo = 'correcto',
        mensaje = 'Agregado Correctamente'
    )

    reiniciarObjetoCita();

    formulario.reset();

    
}

function reiniciarObjetoCita() {

    Object.assign(citaObj, {
        id: generarId(),
        nombre: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

