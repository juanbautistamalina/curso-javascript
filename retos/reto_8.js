/*Refuerza tus conocimientos de Asincronía creando una función que permita obtener los datos 
de la API "https://jsonplaceholder.typicode.com/posts" utilizando fetch. 
Después crea una función que muestre los datos obtenidos en la consola después de un cierto tiempo. */

function obtenerDatos(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(datos => {return datos.json()})
        .then(datos =>{
            console.log("Iniciando solicitud de la API...");
            console.log("Datos obtenidos de la API: ");
            console.log(datos[0])

        })
        .catch(error => console.log("Error: "+ error))
}

function mostrarDatos(){
    setTimeout(function(){obtenerDatos()}, 3000);
}

mostrarDatos()

