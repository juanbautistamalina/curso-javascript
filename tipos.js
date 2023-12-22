// TIPO DE DATOS PRIMITIVOS
let texto = "texto";
let numero = 3.534;
let booleano = true;
let indefinido; // undefined

//no muy utilizados:
let bigInt = BigInt(34854842854836425284349);
let symbol = Symbol("Symbolo");

// TIPOS DE DATOS ESTRUCTURALES
let objeto = {nombre: "Juan"};
let lista = ["Juan"]; // Objeto
let regex = /asd/; // Objeto
let funcion = function(){};

// RAIZ ESTRUCTURAL PRIMITIVO
let nulo = null;


// Analizando el tipo de dato de los ejemplos
console.log("texto es: ", typeof texto);
console.log("numero es: ", typeof numero);
console.log("booleano es: ", typeof booleano);
console.log("indefinido es: ", typeof indefinido);
console.log("bigInt es: ", typeof bigInt);
console.log("symbol es: ", typeof symbol);
console.log("objeto es: ", typeof objeto);
console.log("lista es: ", typeof lista);
console.log("funcion es: ", typeof funcion);
console.log("nulo es: ", typeof nulo);