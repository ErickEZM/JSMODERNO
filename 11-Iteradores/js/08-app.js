const automovil = {
    modelo: "Camaro",
    year: 1998,
    motor: "6.0",


}

// For in itera sobre objetos
for(propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}