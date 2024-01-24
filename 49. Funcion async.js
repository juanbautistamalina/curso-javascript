/*Crea la función 'recibirCelulares' utilizando async/await, esta debe guardar en la constante
 'celulares' lo retornado de la función 'obtenerDatos' de la imagen e imprimir su contenido 
 en la consola. Una vez realizada la función ejecútala en la siguiente línea. */

const datos = [
    {
        modelo: "Galaxy Z Flip4",
        color: "púrpura bora",
        almacenamiento: 128
    },
    {
        modelo: "Galaxy Z Fold4",
        color: "verde",
        almacenamiento: 256

    }
]


function obtenerDatos(){
    return new Promise((resolve, reject) => {console.log("Cargando...");
    if(datos.length === 0){
        reject(console.log("Vacío"))
    }

    setTimeout(() => {
        resolve(datos)}, 2000)
    })
}

async function recibirCelulares(){
    const celulares = await obtenerDatos()
    console.log(celulares);
}

recibirCelulares();