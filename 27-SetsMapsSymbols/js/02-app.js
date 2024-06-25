// weakset
const weakset = new WeakSet();

const cliente = {
    nombre: 'Erick',
    saldo: 200,
}


// Los weakset solamente aceptan objetos
weakset.add(cliente);

// Verifica si el elemento existe en weakset
console.log(weakset.has(cliente));

// Elimina el elemento del weakset
weakset.delete(cliente);

/* El weakset no tiene .size por lo tanto no podemos 
conocer la extension del weakset y tampoco son iterables */

console.log(weakset);
 


