export function validar_correos(correo){
    
    let arroba = false;
    let punto = false;


    for(let i of correo){
        if(i == '@'){
            arroba = true;
        }else if (i == '.'){
            punto = true;
        }
    }


    if(arroba == true && punto == true){
        return "El correo es válido";
    }else{
        return "Eo correo no es válido";
    }
}