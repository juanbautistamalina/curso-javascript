/*1. Refuerza tus conocimientos en funciones creando un sistema de envió de un formulario. 
* Utiliza una función flecha que permita validar si un formulario cuenta con los valores de 
* "nombre", "email" y "mensaje" y otra función para enviarlo, debes imprimir en la consola
* "¡Formulario enviado con éxito!", de lo contrario imprime "Por favor completa todos los campos."*/

let validar_formulario = (nombre, email, mensaje) => {
    return nombre, email, mensaje;
}

function enviar_formulario(nombre, email, mensaje){
    if(validar_formulario(nombre, email, mensaje)){
            console.log("Formulario Enviado con Éxito");
        }else{
            console.log("Por favor completa todos los campos.");
        }

}

const nombre = "Juan";
const email = "malinajuanbautista@gmail.com";
const mensaje = "Hola";

enviar_formulario(nombre, email, mensaje);