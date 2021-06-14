const botaoAdicionar = document.querySelector(".form__adicionar___botao");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.getElementById("form__adicionar")
    
    cliente = obtemClienteDoFormulario(form);

    console.log(cliente);
    
    let nomeTd = document.createElement("td");
    let petTd = document.createElement("td");
    let nomePetTd = document.createElement("td");
    let racaPetTd = document.createElement("td");
    let pesoPetTd = document.createElement("td");
    let portePetTd = document.createElement("td");

    nomeTd.textContent = cliente.nome;
    petTd.textContent = cliente.pet;
    nomePetTd.textContent = cliente.nomePet;
    racaPetTd.textContent = cliente.racaPet;
    pesoPetTd.textContent = cliente.pesoPet;
    portePetTd.textContent = cliente.petPorte;

    let clienteTr = document.createElement("tr");

    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(petTd);
    clienteTr.appendChild(nomePetTd);
    clienteTr.appendChild(racaPetTd);
    clienteTr.appendChild(pesoPetTd);
    clienteTr.appendChild(portePetTd);

    let clientes = document.querySelector(".tabela__clientes");

    clientes.appendChild(clienteTr);


});

function obtemClienteDoFormulario(form){
    cliente = {
    nome: form.nome.value,
    pet: form.pet.value,
    nomePet: form.nomePet.value,
    racaPet: form.racaPet.value,
    pesoPet: form.pesoPet.value,
    petPorte: calculaPorte(form.pesoPet.value)
    }
    return cliente;
}