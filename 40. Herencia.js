/*Crea un objeto 'perro' con un método 'ladra' que imprima 'guau' en la consola. '
perro' se debe crear a partir de una clase funcional 'Perro'. 
Asegúrate que 'Perro' herede de la clase 'Animal' y llama a su método 'ladra' al final. */


function Animal(nombre) {
    this.nombre = nombre;
 }

function Perro(nombre){
    Animal.call(this, nombre);
    this.ladrido = "GUAU";
}

Perro.prototype.ladrar = function(){
    return this.ladrido
}

const perro = new Perro("beto");
console.log(perro.ladrar())