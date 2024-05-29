// Manipulación DOM: Document object model

// Selecciono el botón
const btnSavePlan = document.querySelector('#btn-save-plan');

//Asocio al evento click la función de mostrar el plan
btnSavePlan.addEventListener('click',showPlan);


//Función mostrar el plan

function showPlan(){
    //Obtengo el elemento HTML del formulario
    const contenedor = document.querySelector('#contenedor-inicial')
    const form = document.querySelector('#form-plan');

    //obtengo los inputs del formulario
    const inputTitle = document.querySelector('#title-plan');
    const inputPorcentaje = document.querySelector('#porcentaje');
    const inputFecha = document.querySelector('#fecha');
    const inputBanner = document.querySelector('#imagen');
    
    //obtengo los valores de los inputs
    let valorTitle = inputTitle.value;
    let valorPorcentaje = inputPorcentaje.value;
    valorPorcentaje = parseInt(valorPorcentaje)
    let valorFecha = inputFecha.value;
    let valorBanner = inputBanner.value;
    
    let titulo = document.querySelector("#titulo");
    //titulo.innerHTML = "Hola lo agrego desde JAVASCRIPT 😋";
    let mostrar = `Vamos al ${valorTitle} el ${valorFecha}?`;
    titulo.innerHTML = mostrar;
    
    contenedor.classList.add('activo')

}



// Selecciono el botón
const btnRespuesta = document.querySelector('.btn-respuesta');

//Asocio al evento click la función de mostrar el plan
btnRespuesta.addEventListener('click',calculos);

function calculos(){
        //Obtengo el elemento HTML del formulario
        const formRta = document.querySelector('#respuesta');

        //obtengo los inputs del formulario
        const inputPorcentaje = document.querySelector('#porcentaje');
        const inputRespuesta = document.querySelector('#porcentaje-rta');

        //obtengo los valores de los inputs
        let valorPorcentaje = inputPorcentaje.value;
        valorPorcentaje = parseInt(valorPorcentaje);
        let valorRespuesta = inputRespuesta.value;
        valorRespuesta = parseInt(valorRespuesta);

        let resolucion = "VAMOS!";

        if(valorPorcentaje+valorRespuesta >= 100){
            resolucion = "VAMOS!!"
        }else{
            resolucion = "NO VAMOS!"
        }

        let resultado = document.querySelector("#resolucion");
        resultado.innerHTML = resolucion;

}

// NOS ASEGURAMOS QUE SE CARGUE EL CONTENIDO DE LA PAGINA EN EL DOM
// document.addEventListener('DOMContentLoaded',function(){

//     const btnSavePlan = document.querySelector('.btn-save-plan');

//     //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
//     btnSavePlan.addEventListener('click',showPlan);
//     //showPlan();
// });