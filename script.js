calcular.onclick = function () {

    let nombre = document.querySelector("input[type=text]").value;
    let fecha = document.querySelector("input[type=date]").value;

    let añoNacimiento = new Date(fecha).getFullYear();

    let edad = 2025 - añoNacimiento;

    let nombreFinal = (nombre.length < 1 || nombre.length == 1 || nombre == "." ? "Fulano" : nombre);

    resultado.textContent = "Hola, " + nombreFinal + ". Tienes " + edad + " años.";
};