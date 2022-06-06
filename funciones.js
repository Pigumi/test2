//funcion para posicionar cursor en la primera linea del formulario
function posicionar_cursor(){
    document.getElementById("txtNombre").focus();
}


//validar datos y mostrar resultado
function validar_sugerencia(){

    //declaramos variables
    var nombre = document.getElementById("txtNombre").value;
    var correo = document.getElementById("txtCorreo").value;
    var celular = document.getElementById("txtCelular").value;
    var comentario = document.getElementById("txtComentario").value;
    
    //validacion de datos
    if (nombre.trim() == "" && correo.trim() == "" && comentario.trim() == ""){
        alert("Debe ingresar los datos solicitados.")
        document.getElementById("txtNombre").focus();
        return
    }
    if(nombre.trim() == ""){
        alert("escriba su nombre")
        document.getElementById("txtNombre").focus();
        return 
    }
    if(correo.trim() == ""){
        alert("ingrese su correo")
        document.getElementById("txtCorreo").focus();
        return 
    }
    if(comentario.trim() == ""){
        alert("escriba un comentario")
        document.getElementById("txtComentario").focus();
        return 
    }
    else
    alert("Datos Enviados \nNombre: " + nombre + "\nCelular: " + celular + "\nCorreo: " + correo + "\nComentario: "+comentario)
}