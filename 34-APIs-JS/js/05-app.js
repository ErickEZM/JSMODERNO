document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion pars reproducir el video');
    } else {
        console.log('Pausar el video');
    }
})