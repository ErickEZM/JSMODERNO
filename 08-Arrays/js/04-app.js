//  Aunque este declarado como const los valores de un arreglo si se puede modificar
// Tanto en arreglos y objetos se pueden modificar a menos que selles el objeto

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

meses[0] = "Nuevo Mes";
meses[7] = "Ultimo Mes";

console.table(meses);