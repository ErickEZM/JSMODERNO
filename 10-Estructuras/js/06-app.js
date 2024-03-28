const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log("Si eres un usuario y puedes pagar");
} else if(!usuario && !puedePagar) {
    console.log("No puedes comprar");
} else if(!usuario) {
    console.log("No eres usuario");
} else if(!puedePagar) {
    console.log("No puedes pagar");
} 