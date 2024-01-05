/*Itera a través del objeto 'persona' e imprime en la consola cada una de sus propiedades 
y valores usando la llave 'prop'. */

const persona = {nombre: 'Juan', edad: 25, ciudad: 'Madrid'};
for(i in persona){
    console.log(i+ ": "+persona[i]);
}