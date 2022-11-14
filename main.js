while(true){
    let input_alert = prompt("Ingrese su nombre: ")
    if(input_alert == " "){
        alert("Ingrese un usuario valido")
    }else if(input_alert == null || input_alert == ""){
        alert("Usted no ha ingresado ningun usuario, intente de nuevo")
    }else{
        alert("Bienvenido usuario: " + input_alert)
        break
    }
}
