export function valida(input){

    const tipoDeErrores = [
        "valueMissing",
        "typeMismatch",
        "atternMismatch",
        "customError"
    ];

    const mensajesDeError = {
        nombre: {
            valueMissing: "Este campo no puede estar vacio"
        },
        email: {
            valueMissing: "Este campo no puede estar vacio",
            typeMismatch: "El correo no es valido"
        },
        asunto: {
            valueMissing: "Este campo no puede estar vacio",
        }
    };

    const tipoDeInput = input.dataset.tipo;
    const span = document.querySelector(`.span-${tipoDeInput}`);


    if(input.validity.valid){
        input.classList.remove("inputs__invalido");
        span.innerHTML = "";

    }else{
        input.classList.add("inputs__invalido");
        span.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }

    
    function mostrarMensajeDeError(tipoDeInput, input){
        let mensaje = "";
        tipoDeErrores.forEach(error => {
            if(input.validity[error]){
                mensaje = mensajesDeError[tipoDeInput][error];
            }
        });
    
    
        return mensaje;
    }
    

};
















