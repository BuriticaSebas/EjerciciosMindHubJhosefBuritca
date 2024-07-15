window.onload = escucharboton;

function escucharboton() {
    var boton_calcular = document.getElementById("calcular_imc");
    boton_calcular.addEventListener("click", obtencion_datos);
}

function obtencion_datos() {
    var altura = parseFloat(document.getElementById("altura").value) / 100; // Convertir cm a metros
    var peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso) || altura == "" || peso == "") {
        alert("Por favor complete los campos con valores válidos");
        return;
    }

    var imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Redondear a dos decimales

    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = "Su IMC es: " + imc;
}
//--------------------------------------------------------------------------------------------------------------------------------


function convertir() {
    let dolar = parseFloat(document.getElementById("dolar").value);
    let tasaCambio = 4000; // Tasa de cambio actual: 1 USD = 4000 COP
    let peso = dolar * tasaCambio;
    document.getElementById("peso_colombiano").value = peso.toFixed(2);
}
