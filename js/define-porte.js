let clientes = document.querySelectorAll(".tabela__cliente");

for (let i = 0; i < clientes.length; i++) {
  let cliente = clientes[i];

  let tdPeso = cliente.querySelector(".tabela__cliente___petPeso");
  let tdPorte = cliente.querySelector(".tabela__cliente___petPorte");

  let peso = tdPeso.textContent;

  pesoValido = validaPeso(peso);

  if (!pesoValido) {
    console.log("Peso Inválido");
    pesoValido = false;
    cliente.classList.add("pesoInvalido");
    tdPorte.textContent = "Peso Inválido";
  } else {
    porte = calculaPorte(pesoValido);
    tdPorte.textContent = porte;
  }
}

function validaPeso(peso) {
  if (peso > 0 && peso < 160) {
    return true;
  } else {
    return false;
  }
}

function calculaPorte(peso) {
  porte = "";

  if (peso < 6) {
    porte = "PP";
  } else if (peso < 15) {
    porte = "P";
  } else if (peso < 25) {
    porte = "M";
  } else if (peso < 45) {
    porte = "G";
  } else if (peso < 160) {
    porte = "XG";
  }

  return porte;
}