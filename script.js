calcular.onclick = function () {

    let nombre = document.querySelector("input[type=text]").value;
    let fecha = document.querySelector("input[type=date]").value;

    let añoNacimiento = new Date(fecha).getFullYear();

    let edad = 2025 - añoNacimiento;

    resultado.textContent = "Hola, " + nombre + ". Tienes " + edad + " años.";
};