window.addEventListener('scroll', () => {
    

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);


    if (ubicacion.top < 400) {
        console.log("El elemmento ya esta visible");
    } else {
        console.log("Aun no");
    }
})