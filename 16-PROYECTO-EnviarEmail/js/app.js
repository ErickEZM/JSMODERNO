document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnreset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner')

    // Asignar eventos // blur se ejecuta cuando estas en un campo y sales
    inputEmail.addEventListener('input', validar);

    inputCC.addEventListener('input', comprobarCC);

    inputAsunto.addEventListener('input', validar);

    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);
 
    btnreset.addEventListener('click', function(e) {
        e.preventDefault();

        resetFormulario();
    });

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            // Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 
            'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }
    
    function validar(e) {
        
        
        // Trim elimina los espacios en blanco
        if(e.target.value.trim() === '') { 
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);

            
           // Reiniciar valores del objeto
            email[e.target.name] = "";
            comprobarEmail();
            return;
        } 

        if(e.target.id === "email" && !validarEmail(e.target.value)) {
            mostrarAlerta(`El email no es valido`, e.target.parentElement);
            email[e.target.name] = "";
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();

    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);
        
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        referencia.appendChild(error);
        
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        
        // Toma el objeto de email y crea un arreglo con los valores, despues verifica si alguno de los valores esta vacio
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true;
            return;
        } 

        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false; 
    }

    function comprobarCC(e) {
        email[e.target.id] = e.target.value.trim().toLowerCase();
        
        
        if(e.target.value === ''){
            delete email.cc;
            limpiarAlerta(inputCC.parentElement);
            comprobarEmail();
            return;
        } 

        if(!validarEmail(e.target.value)) {
            mostrarAlerta(`El email no es valido`, e.target.parentElement);
            email[e.target.name] = "";
            comprobarEmail();
            return;
        }

        limpiarAlerta(inputCC.parentElement);
        comprobarEmail();


    }
   

    function resetFormulario() {
        // Reinciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        
        formulario.reset();

        comprobarEmail();
    }
});