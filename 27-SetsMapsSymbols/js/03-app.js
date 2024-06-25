// Los maps son listas ordenadas de llave y valor y los set solo de valor
const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 300);

// Muestra la extension del map
console.log(cliente.size);

// Comprueba si hay un valor en el map
console.log(cliente.has('nombre'));

// Obtiene el valor si existe en el map
console.log(cliente.get('nombre'));

// Elimina el elemento del map
cliente.delete('saldo');
console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

// Elimina todos los elementos
cliente.clear();
console.log(cliente);


const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
paciente.set('Dr', 'Dr Asignado');

// Reescribe un valor
paciente.set('nombre', 'Antonio');

console.log(paciente);

paciente.forEach((datos, index) => {
    console.log(index);
    console.log(datos);
})