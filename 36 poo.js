/*Crea un objeto que represente un lenguaje de programación con las siguientes propiedades: 
* nombre, año, autor, y una función obtenerInfo() que retorne una cadena de texto: 
* JavaScript fue creado en 1995 por Brendan Eich. */

const javascript = {
    nombre: "JavaScript",
    año: 1995,
    autor: "Brendan Eich",
    funcion: function obtenerInfo(){
        return this.nombre + " fue creado en "+this.año+" por "+this.autor;
    }
};

console.log(javascript.funcion().obtenerInfo);