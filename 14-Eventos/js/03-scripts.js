const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    if (e.target.value === "") {
        console.log("Fallo la validacion");
    }
    console.log(e.target.value); // Nos da lo que esta escribiendo el usuario
});

// keydown - cuando presionas una tecla

// keyup - cuando presionas una tecla y la dejas de presionar

// blur - cuando entras y sales del campo

// copy - cuando los copias

// paste - cuando copias y pegas

// cut - cuando lo cortas
