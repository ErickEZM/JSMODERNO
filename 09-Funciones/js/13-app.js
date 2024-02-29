
const reproductor = {
    cancion : "",
    reproducir : id =>  console.log(`Reproductiendo cancion con el id ${id}`),
    pausar: id => console.log(`Pausando cancion ${id}`),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlaylist: playlist => console.log(`Creando playlist ${playlist}`),
    borrarPlaylist: playlist => console.log(`Borrando playlist ${playlist}`),
    reproducirPlaylist: playlist => console.log(`Reproduciendo playlist ${playlist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }

}

reproductor.nuevaCancion = "Worldwide";
reproductor.obtenerCancion;

// En un objeto se le llaman propiedades pero  como tiene una funcion se le conoce como metodos de propiedad
reproductor.reproducir(30);
reproductor.pausar(30);
reproductor.borrar(30);
reproductor.crearPlaylist("Pop");
reproductor.borrarPlaylist("Rock");
reproductor.reproducirPlaylist("Pop");