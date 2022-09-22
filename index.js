document.addEventListener("DOMContentLoaded", () => {
    console.log("La pagina ha cargado completamente")
});

////////////////////////////////////////////////////////////////////////////////////

function clickFormulario(){
    console.log ("El usuario seleccionó los accesorios para ver la mercadería")
}

const tituloa = document.getElementById("tituloAccesorios");

tituloa.addEventListener("click", clickFormulario);

///////////////////////////////////////////////////////////////////////////////////

function clickBuscador(){
    console.log ("El usuario escribirá un dato")
}

const buscador = document.getElementById("buscador")

buscador.addEventListener("click", clickBuscador)

///////////////////////////////////////////////////////////////////////////////////

const form = document.querySelector("#formulario");

const enviarFormulario = (evento) => {
    evento.preventDefault();
    const { name, tel, email } = evento.target;

    console.log(name.value, tel.value, email.value) 


    if(name.value.length === 0) alert ("El dato introducido no es valido")
    if(tel.value.length === 0) alert ("El dato introducido no es valido")
    if(email.value.length === 0) alert ("El dato introducido no es valido")

};

form.addEventListener ("submit", enviarFormulario);

