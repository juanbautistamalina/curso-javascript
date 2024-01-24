fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(respuesta => {return respuesta.json()})
    .then(datos => console.log(datos.name))
    .catch(error => console.log(error))