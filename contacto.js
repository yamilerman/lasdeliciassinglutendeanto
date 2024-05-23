(function(){
    //Variables
    var formulario = document.getElementsByName('formulario')[0],
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.name.value.trim() === ""){
            alert("Completa el campo nombre");
            e.preventDefault();
    
        }
    };

    var validarEmail = function(e){
        if (formulario.email.value.trim() === ""){
            alert("Completa el campo mail");
            e.preventDefault();
    
        }
    };

    var validarTelefono = function(e){
        if (formulario.telefono.value.trim() === ""){
            alert("Completa el campo telefono");
            e.preventDefault();
    
        }
    };

    var validarRadio = function(e){
        if (formulario.respuesta[0].checked == true || 
            formulario.respuesta[1].checked == true){
        } else{
            alert("Completa el campo");
            e.preventDefault();
        }
    };
    
    


    var validar = function(e){
        validarNombre(e);
        validarEmail(e);
        validarTelefono(e);
        validarRadio(e);
        
    };
    formulario.addEventListener("submit", validar);
})();