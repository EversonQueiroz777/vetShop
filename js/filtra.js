let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    let clientes = document.querySelectorAll(".tabela__cliente");
    
    if(this.value.length > 0){
        for(let i = 0; i < clientes.length; i++){
        let cliente = clientes[i];
        let tdNome = cliente.querySelector(".tabela__cliente___nome");
        let nome = tdNome.textContent;
        let expressao = new RegExp(this.value, "i")    ;
            if(!expressao.test(nome)){
                cliente.classList.add("invisivel");
            }else{
                cliente.classList.remove("invisivel");
            }
        };
    }else{
        for(let i = 0; i < clientes.length; i++){
            cliente = clientes[i];
            cliente.classList.remove("invisivel");
        };
    }
});