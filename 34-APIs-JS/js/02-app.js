// El Intersection Observer API nos permite saber cuando un elemento sale o entra del viewport 

document.addEventListener('DOMContentLoaded', () => {
    
    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting) {
            console.log('Ya esta visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
})