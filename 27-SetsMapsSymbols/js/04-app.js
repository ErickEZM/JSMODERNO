const producto = {
    idProducto: 10,
}

const weakMap = new WeakMap();
weakMap.set(producto, 'Monitor');

// No se pueden iterar 
console.log(weakMap.has(producto));
console.log(weakMap.get(producto));

weakMap.delete(producto);

/* Tanto weakset o weakmap no se pueden iterar,
no se puede conocer su extension y solo aceptan objetos*/
console.log(weakMap);