const botaoAdicionar = document.querySelector(".form__adicionar___botao");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.getElementById("form__adicionar")
    
    let nome = form.nome.value;
    let pet = form.pet.value;
    let nomePet = form.nomePet.value;
    let racaPet = form.racaPet.value;
    let pesoPet = form.pesoPet.value;

    console.log(nome);
    console.log(pet);
    console.log(nomePet);
    console.log(racaPet);
    console.log(pesoPet);

    let nomeTd = document.createElement("td");
    let petTd = document.createElement("td");
    let nomePetTd = document.createElement("td");
    let racaPetTd = document.createElement("td");
    let pesoPetTd = document.createElement("td");

    nomeTd.textContent = nome;
    petTd.textContent = pet;
    nomePetTd.textContent = nomePet;
    racaPetTd.textContent = racaPet;
    pesoPetTd.textContent = pesoPet;

    let clienteTr = document.createElement("tr");

    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(petTd);
    clienteTr.appendChild(nomePetTd);
    clienteTr.appendChild(racaPetTd);
    clienteTr.appendChild(pesoPetTd);

    let clientes = document.querySelector(".tabela__clientes");

    clientes.appendChild(clienteTr);


});