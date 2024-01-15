console.log("Hola Universo");

// Reto: Variables
const pi = 3.1416;
let radio = 50;

// Reto: Texto
const nombre = "tu_nombre";

// Reto: Métodos de Texto
let palabra = "filipinas";
palabra = palabra.toUpperCase();
console.log(palabra);

// Reto: Numero
let numero = 5;

// Reto: Lista
let frutas = ['manzana', 'naranja', 'pera', "salak"];

// Reto: Metodos de Lista
let lista = ["principio", "medio"];
lista.push("final");
console.log(lista);

// Reto: Objeto
let persona = {
    nombre: "Juan Bautista",
    edad: 21
}


// Reto: Tipos
let mi_variable = 5;
console.log(typeof(mi_variable));

// Reto: Plantillas de texto y Coerción
let mi_nombre = 'Juan';
const saludo = `Hola ${mi_nombre}`;
console.log(saludo);

// Reto: Variables y tipos de datos






//------------------------------------------





// Reto: Operadores Comparativos de Números

let objeto = {
    numero1: 20, 
    numero2: 10
};

console.log(objeto.numero1 >= objeto.numero2);


// Reto: Operadores Comparativos de Texto
let str1 = "Cadena Uno";
let str2 = "Cadena Dos";
console.log(str1 == str2);


// Reto: Comparar por valor vs por referencia
const a_ = [1, 2, 3];
const b_ = [1, 2, 3];
console.log(a_ === b_); // false

// Reto: OP. Aritméticos
let a = 10;
let b = 5;
let c = 3;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(c*c);
console.log(125 / b);


// Reto: OP. Logicos
let respuesta = 5>2 && 3<7;
console.log(respuesta);


// Reto: Operadores
let numero1= 10
let numero2 = 5;
str1 = "hola";
str2 = "adios";
let objeto1 = {nombre: "Juan"};
let objeto2 = {edad: 21};

console.log("¿El número 1 es mayor que el número 2?: "+(numero1>numero2));
console.log("¿El número 1 es menor que el número 2?: "+(numero1<numero2));
console.log("¿El número 1 es igual que el número 2?: "+(numero1==numero2));
console.log("¿El texto 1 es igual al texto 2?: "+(str1 == str2));
console.log("¿Los objetos son iguales?: "+(objeto1 === objeto2))
console.log("AND Lógico: "+(false && false));
console.log("OR Lógico: "+(true || false));
console.log("La suma de 10 + 3: "+(10+3));
console.log("La resta de 10 - 3: "+(10-3));
console.log("La multiplicación de 10 * 3: "+(10*3));
console.log("La división de 10 / 3: "+(10/3));
console.log("10 módulo de 3: "+(10%3));


// Reto: Condicional if/else
let boton = "next";

if(boton == "next"){
    console.log("The Weeknd");
}else if (boton == "previous"){
    console.log("Eminem");
}



// Reto: Condicional Switch
numero = 1; 
let color = '';

switch(numero){
    case 1:
        color = "rojo";
        break;
    
    case 2:
        color = "azúl";
        break;

    case 3:
        color = "verde";
        break;

    default:
        color = "negro";
}

console.log(color);


// Reto: OP Ternario
