/*1. Refuerza tus conocimientos en bucles utilizando el bucle adecuado para cada caso:    
    1. Imprime los números del 1 al 5    
    2. Recorre una lista de colores    
    3. Recorre las propiedades de un objeto persona    
    4. Imprime los números pares hasta el 10, imprimiendo al menos uno.*/

// Ejercicio 1:
let numero = 1;
while(numero<=5){
    console.log(numero);
    numero++;
}

console.log("-------------")

// Ejercicio 2:
let lista = ["rojo", "verde", "azul", "amarillo"];
for(i of lista){
    console.log(i);
}

console.log("-------------")


// Ejercicio 3:
let persona = {
    nombre: "Juan",
    edad: 21,
    profesion: "Programador"
}

for(i in persona){
    console.log(i+": "+persona[i]);
}

console.log("-------------")

// Ejercicio 4
for(i = 2; i<=10; i+=2){
    console.log(i);
}