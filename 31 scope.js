/*Crea una función que tome un número 'num' y lo multiplique por una variable global llamada 
* 'multiplicador'. Recuerda que 'multiplicador' es una variable global y puede ser accedida 
* desde cualquier parte del código mientras que 'num' es local. */

function mi_funcion(num){
    resultado = num * multiplicador; 
    return resultado
}


multiplicador = 5;
console.log(mi_funcion(10));