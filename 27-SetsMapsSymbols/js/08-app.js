const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Erick');
datos.set('profesion', 'Desarrollador Web');

// Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato); 
}

// Keys Iterator / Retorna unicamente las llaves 
for(let keys of ciudades.keys()) {
    console.log(keys);
}

for(let keys of ordenes.keys()) {
    console.log(keys);
}

for(let keys of datos.keys()) {
    console.log(keys);
}

// Values Iterator / Retorna unicamente el valor
for(let value of ciudades.values()) {
    console.log(value)
}

for(let value of ordenes.values()) {
    console.log(value)
}

for(let value of datos.values()) {
    console.log(value)
}


// Entries Iterator / Retorna llave y valor en un arreflo
for(let entry of ciudades.entries()) {
    console.log(entry);
}

// Entry agrega una llave a los elementos del set
for(let entry of ordenes.entries()) {
    console.log(entry);
}

for(let entry of datos.entries()) {
    console.log(entry);
}
