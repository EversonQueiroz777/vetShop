let clientes = document.querySelectorAll(".tabela__cliente");

for(let i = 0; i < clientes.length; i++){
    let cliente = clientes[i];

    let tdPeso = cliente.querySelector(".tabela__cliente___petPeso");
    let tdPorte = cliente.querySelector(".tabela__cliente___petPorte");

    let peso = tdPeso.textContent;
 
    pesoEhValido = validaPeso(peso);
    
    if(!pesoEhValido){
        console.log("Peso Inválido");
        pesoEhValido = false;
        cliente.classList.add("pesoInválido");
        tdPorte.textContent = "Peso Inválido";
    }
    else if(peso < 6 && pesoEhValido){
        tdPorte.textContent = "PP";
    }
    else if(peso < 15 && pesoEhValido){
        tdPorte.textContent = "P";
    }
    else if(peso < 25 && pesoEhValido){
        tdPorte.textContent = "M";
    }
    else if(peso < 45 && pesoEhValido){
        tdPorte.textContent = "G";
    }
    else if(peso < 90 && pesoEhValido){
        tdPorte.textContent = "XG";
    }
    
}

function validaPeso(peso){
    if(peso > 0 && peso < 160){
        return true;
    }else{
        return false;
    }
}