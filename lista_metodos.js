let lista = ["d", "c", "b", "a"];
console.log("La lista tiene: ", lista.length, " elementos.");

console.log(lista.sort()); // Ordenar lista
console.log(lista.includes("a")); // Incluye o no un elemento
lista.push("e"); // Añadir un elemento al final de la lista
console.log(lista);
lista.pop(); // Eliminar el último elemento de la lista
console.log(lista);
lista.unshift("z"); // Añadir un elemento al principio de la lista
console.log(lista);
lista.shift() // Eliminar el primer elemento de la lista
console.log(lista)

lista.splice(2, 3); // Eliminando más de un elemento
console.log(lista);

