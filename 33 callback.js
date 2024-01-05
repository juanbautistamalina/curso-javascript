// Escribe una función 'suma' que tome dos argumentos y un callback. 
// La función debe sumar los dos argumentos y luego llamar al callback con el resultado como argumento.

function suma(a, b, callback){
    let resultado = a+b;
    callback(resultado);
}

suma(10,10,console.log)