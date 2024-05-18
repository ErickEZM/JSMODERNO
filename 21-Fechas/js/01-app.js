const diaHoy = new Date();

let valor;

valor = diaHoy;

// Las fechas son un objeto
// console.log(typeof valor);

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); // getMonth cuenta Enero como el mes 0
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear(2010);



console.log(diaHoy);