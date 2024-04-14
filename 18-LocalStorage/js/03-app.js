// Eliminar elementos de local storage
localStorage.removeItem('nombre');

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Abril');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

// Elimina todo el contenido dentro del local storage
localStorage.clear();


