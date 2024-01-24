/*Crea una función que divida dos números, pero maneja la excepción de división entre cero usando try/catch.
 Imprime el error en el formato 'Error: error'. */


 function dividir(a, b) {
    try {
        if (b === 0) {
            return 'División por cero';
        }else{
            return a / b;
        }
        
    } catch (error) {
        console.log('Error Inesperado:', error);
    }
}

// Pruebas de la función
console.log(dividir(10, 2));  // Debería mostrar 5
console.log(dividir(5, 0));   // Debería mostrar 'Error: División por cero'
