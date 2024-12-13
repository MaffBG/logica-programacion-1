document.getElementById("ordenar").addEventListener("click", function () {
    // Se obtienen los valores ingresados por el usuario
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const numero3 = parseFloat(document.getElementById("numero3").value);

    // Se valida que los valores sean números válidos
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        document.getElementById("resultado").innerHTML = "<p>¡Ups! Aquí hay un error. Por favor, ingresa tres números válidos.</p>";
        return;
    }

    // Se comprueba que los 3 números sean iguales
    if (numero1 === numero2 && numero2 === numero3) {
        document.getElementById("resultado").innerHTML = "<p>¡Oh no! Los tres números son iguales. Ingresa números diferentes,</p>";
        return;
    }

    // Se ordenan los números
    const numeros = [numero1, numero2, numero3];
    const mayorAMenor = [...numeros].sort((a, b) => b - a); // De mayor a menor
    const menorAMayor = [...numeros].sort((a, b) => a - b); // De menor a mayor

    // Se muestran los resultados en el DOM
    document.getElementById("resultado").innerHTML = `
      <p><strong>De mayor a menor:</strong> ${mayorAMenor.join(", ")}</p>
      <p><strong>De menor a mayor:</strong> ${menorAMayor.join(", ")}</p>
    `;
});
