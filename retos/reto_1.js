let nombre = "Juan";
let texto = "¡Hola Mundo!";
let array = [1, 2, 3, 4, 5];

// Impresiones
console.log(texto, "Soy", nombre);
console.log("Mi nombre en mayúsculas es: " + nombre.toUpperCase);
console.log("Mi nombre en minúsculas es: " + nombre.toLowerCase);
console.log("El mensaje de "+ texto + " tiene: " + texto.length + " caracteres. ");
console.log("El tercer número del array con los valores: ", array, "es: ", array[2]);

array.push(6) // Añado el 6 al final de la lista
console.log("Se añade el número que sigue en orden al final del arreglo y es: ", (array.length - 1));




let frase = "'La lluvia en Sevilla es una maravilla'";
let regex = /lluvia/;
let resultado = frase.match(regex);
console.log("Se encontró el patrón 'lluvia' en el texto: ",frase,"por lo que el resultado es: " + resultado);
