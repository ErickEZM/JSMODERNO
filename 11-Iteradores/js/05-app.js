let i = 1;

do { // Inicio

    if(i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FizzBuzz`);
    } else if(i % 3 == 0) {
        console.log(`${i} Fizz`)
    } else if(i % 5 == 0) {
        console.log(`${i} Buzz`);
    }
    
    i++; // Incremento
} while (i <= 100); // Condicion