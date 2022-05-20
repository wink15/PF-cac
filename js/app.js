const nombre = document.getElementById('nombre');

const email = document.getElementById('email');
const con= document.getElementById('consulta');

let err = document.getElementsByClassName("alert");

const regexText =/^[a-zA-Z\u00E0-\u00FC ]+$/;

const validarRequired = function() {

 
    if(nombre.value=== null || nombre.value=== ""){
       
        swal("Nombre vacio", "Ingrese un nombre", "error");
        
        
        return false;
        
    }
    if(email.value=== null || email.value=== ""){

        swal("Error!", "Ingrese un mail", "error");
        return false;
    }
    if(consulta.value=== null || consulta.value=== ""){

        swal("Error!", "Ingrese una consulta", "error");
        return false;
    }

    if (regexText.test(nombre.value)) {}else{
        swal("Error!", "Nombre invalido", "error");

        return false;
    }

    if(validar_email(email.value)){}else{
        swal("Error!", "Mail incorrecto", "error");
        return false;
    }
   
}


function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

