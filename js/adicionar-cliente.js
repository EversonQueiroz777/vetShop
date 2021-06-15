const botaoAdicionar = document.querySelector(".form__adicionar___botao");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.getElementById("form__adicionar")
    
    cliente = obtemClienteDoFormulario(form);

    adicionaClienteNaTabela(cliente);

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

function adicionaClienteNaTabela(cliente){
    let clienteTr = montaTr(cliente);
    const tabelaClientes = document.querySelector(".tabela__clientes");
    tabelaClientes.appendChild(clienteTr);
}

function montaTr(cliente){
    clienteTr = document.createElement("tr");
    clienteTr.classList.add("tabela__cliente");

    clienteTr.appendChild(montaTd(cliente.nome, "tabela__cliente___nome"));
    clienteTr.appendChild(montaTd(cliente.pet, "tabela__cliente___pet"))
    clienteTr.appendChild(montaTd(cliente.nomePet, "tabela__cliente___petNome"));
    clienteTr.appendChild(montaTd(cliente.racaPet, "tabela__cliente___petRaca"));
    clienteTr.appendChild(montaTd(cliente.pesoPet, "tabela__cliente___petPeso"));
    clienteTr.appendChild(montaTd(cliente.petPorte, "tabela__cliente___petPorte"));

    return clienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}