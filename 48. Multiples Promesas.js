/* Vemos un par de promesas que se resuelven, una después de 1 segundo y otra que después de 2 segundos.
   Concatena los resultados cuando se hayan cumplido las promesas e imprímelos. */


const promesa1 = new Promise((resolve) => {
	setTimeout(() => { resolve('Hola'); }, 1000);
});

const promesa2 = new Promise((resolve) => {
	setTimeout(() => { resolve('Mundo') }, 2000);
});

Promise.all([promesa1, promesa2])
    .then(([resultado1, resultado2]) => {console.log(resultado1)
    return resultado2})
    .then(resultado2 => {console.log(resultado2)})