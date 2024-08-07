(function() {

    formulario.addEventListener('submit', validarCliente);

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
    });

    
    function validarCliente(e) {
        e.preventDefault();

        // Leer todos loa inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email == '' || telefono === '' || empresa === '' ) {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Crear un objeto con la informacion
        const cliente = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa,
        }
        
        cliente.id = Date.now();
        
        crearCliente(cliente);
        

    }

    function crearCliente(cliente) {
        
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.add(cliente);

        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error');
        }

        transaction.oncomplete = function() {
            console.log('Cliente agregado');

            imprimirAlerta('El cliente se agrego correctamente');
            formulario.reset();

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

    }

})();
