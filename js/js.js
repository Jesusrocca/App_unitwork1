function validar(){
    var nombre1 = document.getElementById("nombre").value;
    //alert("nombre: "+nombre1);
    var telefono1 = document.getElementById("telefono").value;
    //alert("telefono: "+telefono1); 
    var email1 = document.getElementById("email").value;
    //alert("email: "+ email1);
    var mensaje1= document.getElementById("mensaje").value;
    //alert("mensaje: "+ mensaje1);
    const parrafo = document.getElementById("warning")
    var exprexion = /\w+@\w+\.+[a-z]/; //texto+@+texto+punto+letra
    let warning ="";
    if(nombre1 === "" || telefono1 === "" || email1 === "" || mensaje1 === ""){
        //alert("Todos los cambos son obligatorios");
        warning += `Todos los campos son obligatorios<br>` 
        parrafo.innerHTML = warning;
        nombre.focus()
        return false;
    }else if(nombre1.length>20){
        //alert("Nombre muy largo")
        warning += `Nombre muy largo<br>` 
        parrafo.innerHTML = warning;
        nombre.focus()
        return false;
    } else if(telefono1.length>10){
        //alert("EL telefono no valido")
        warning += `Telefono no valido<br>` 
        parrafo.innerHTML = warning;
        telefono.focus()
        return false;
    }else if(email1.length>30){
        //alert("Su email es largo")
        warning += `Email Largo<br>` 
        parrafo.innerHTML = warning;
        email.focus()
        return false;
    }else if(!exprexion.test(email1)){
        //alert("Email no valido")
        warning += `Email no valido<br>` 
        parrafo.innerHTML = warning;
        email1.focus()
        return false;

    }else if(mensaje1<2){
        //alert("mensaje corto")
        warning += `Su mensaje es corto<br>` 
        parrafo.innerHTML = warning;
        mensaje.focus()
        return false;
    }else if(isNaN(telefono1)){
        //alert("El telefono no es un numero")
        warning += `El telefono no es un numero<br>` 
        parrafo.innerHTML = warning;
        telefono.focus();
        return false
    }

    alert("DATOS ENVIADOS CORRECTAMENTE")

    
}

/*
var conta=0;
    var APA=document.getElementById("ApellPa").value;
    let arr = Array.from(APA);
	console.log(arr); 
	var tan = arr.length;
	console.log(tan);
    if(tan==0){
        conta++;
        alert("Ingrese apellido paterno")
        ApellPa.focus()
        
        
    } */