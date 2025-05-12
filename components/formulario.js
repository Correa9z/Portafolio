import { valida } from "../components/validaciones.js";


const inputs = document.querySelectorAll("input");


inputs.forEach(input => {
    input.addEventListener("blur", (input) =>{
        valida(input.target);
    });
})

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente");
    formulario.reset();
    
    // Recargar después de 2 segundos (2000 milisegundos)
    setTimeout(() => {
        location.reload();
    }, 1000);
});