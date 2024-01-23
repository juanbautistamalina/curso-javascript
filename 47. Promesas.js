// Crea una promesa simple que resuelva al texto 'Éxito'

let palabra = "Éxito"

const promesa = new Promise((seCumple, noSeCumple) => {
    if(palabra === "Éxito"){
        return seCumple("Respuesta recibida");
    }else{
        return noSeCumple('Error del Servidor');
    }

})

promesa
    .then(respuesta => console.log(`Éxito: ${respuesta}`))
    .catch(error => console.log(`Error: ${error}`));