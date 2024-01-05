// Reasigna el valor de 10 a 'x' y 'y' dentro del bloque para obtener el resultado indicado
var x = 5;
var y;
{
    x = 10;
	let y = 5;
}
console.log(x,y); // 10 undefined