function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El listado de clientes se descargo correctamente');
            } else {
                reject('Error en la conexion');
            }
        }, 3000);
    });
}

// Function Declaration
async function ejecutar() {

}

// Function Expression
const ejecutar = async () => {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();

        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();