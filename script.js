const calcBtn = document.getElementById("btn");
const resultInput = document.getElementById("imc-result");
const condition = document.getElementById("condition");

function calcularIMC() {
  const peso = document.getElementById("weight").value;
  const altura = document.getElementById("height").value;

  const valorIMC = (peso / (altura * altura)).toFixed(2);

  resultInput.value = valorIMC;

  if (valorIMC < 18.5) {
    condition.innerText = "Bajo Peso";
  } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
    condition.innerText = "Peso Normal";
  } else if (valorIMC >= 25 && valorIMC < 29.9) {
    condition.innerText = "Sobrepeso";
  } else if (valorIMC >= 30 && valorIMC < 34.9) {
    condition.innerText = "Obesidad tipo I";
  } else if (valorIMC >= 35 && valorIMC < 39.9) {
    condition.innerText = "Obesidad tipo II";
  } else if (valorIMC >= 40) {
    condition.innerText = "Obesidad tipo III (mórbida)";
  }
}

calcBtn.addEventListener("click", calcularIMC);
