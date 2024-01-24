// Crea una promesa simple que resuelva al texto 'Éxito'

let promesa = new Promise(function(resolver,rechazar){
    resolver("Éxito");
})

promesa
    .then(respuesta => console.log(respuesta))