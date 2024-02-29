
const reproductor = {
    reproducir : function(id){
        console.log(`Reproductiendo cancion con el id ${id}`);
    },
    pausar: function(id) {
        console.log(`Pausando cancion ${id}`);
    },
    borrar: function(id) {
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(playlist) {
        console.log(`Creando playlist ${playlist}`);
    },
    borrarPlaylist: function(playlist) {
        console.log(`Borrando playlist ${playlist}`);
    },
    reproducirPlaylist: function(playlist) {
        console.log(`Reproduciendo playlist ${playlist}`);
    }
}

// En un objeto se le llaman propiedades pero  como tiene una funcion se le conoce como metodos de propiedad
reproductor.reproducir(30);
reproductor.pausar(30);
reproductor.borrar(30);
reproductor.crearPlaylist("Pop");
reproductor.borrarPlaylist("Rock");
reproductor.reproducirPlaylist("Pop");