function mostrarResultado(resultado) {
    document.getElementById('result').innerText = "Resultado: " + resultado;
}

    function sumar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        mostrarResultado(num1 + num2);
    } else {
        mostrarResultado("Por favor ingresa dos números válidos.");
    }
}


function restar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        mostrarResultado(num1 - num2);
    } else {
        mostrarResultado("Por favor ingresa dos números válidos.");
    }
}


function multiplicar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        mostrarResultado(num1 * num2);
    } else {
        mostrarResultado("Por favor ingresa dos números válidos.");
    }
}


function dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            mostrarResultado(num1 / num2);
        } else {
            mostrarResultado("No se puede dividir entre 0.");
        }
    } else {
        mostrarResultado("Por favor ingresa dos números válidos.");
    }
}