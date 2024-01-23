let promesa = new Promise(function(resolver,rechazar){
    rechazar("muy mal");
})

promesa
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))