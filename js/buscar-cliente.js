let botaoBuscar = document.querySelector(".adicionar-cliente");

botaoBuscar.addEventListener("click", function () {
  console.log("Buscando Pacientes");

  let xhr = new XMLHttpRequest();
  
  xhr.open(
    "GET",
    "C:/Users/Eve/Documents/myprojects/tabela_vetShop/vetShop/clientes.json"
  );

  xhr.addEventListener("load", function () {
    let erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");

      let resposta = xhr.responseText;
      let clientes = JSON.parse(resposta);

      clientes.forEach(function (clientes){
          adicionaClienteNaTabela(clientes);
      })
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
    }
  });
  xhr.send();
});
