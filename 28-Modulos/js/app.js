// El export default no debe de estar dentro de las llaves y el nombre que se le pone actua como un alias
import nuevaFuncion, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tienesSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log(clienteNombre);
console.log(ahorro);

console.log( mostrarInformacion(clienteNombre, ahorro));
tienesSaldo(ahorro);

const cliente = new Cliente(clienteNombre, ahorro);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('CodigoErick', 200, 'Aplicaciones Web');
console.log(empresa.mostrarInformacion());