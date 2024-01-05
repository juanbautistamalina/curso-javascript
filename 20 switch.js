/**Crea un switch que cambie el valor de la variable 'color' según el número ingresado en la variable 'numero'. 
 * Si el valor de 'numero' es 1, 'color' debe ser 'rojo'. Si es 2, 'color' debe ser 'azul'. 
 * Si es 3, 'color' debe ser 'verde'. 
 * Si no se ingresa un número válido, 'color' debe ser 'negro'.*/

let numero = 2;
let color = "";

switch(numero){
    case 1:
        color = "rojo";
        break;
    
    case 2:
        color = "azul";
        break;
    
    case 3:
        color = "verde";
        break;
    
    default:
        color = "negro";
    }


console.log(color)