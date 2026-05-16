
function removerCores() {
    let caixa = document.getElementById("produto");
    caixa.classList.remove("cor-vermelha");
    caixa.classList.remove("cor-azul");
    caixa.classList.remove("cor-verde");
}

function definirCorVermelha() {
    let caixa = document.getElementById("produto");

    removerCores();
    caixa.classList.add("cor-vermelha");
}

function definirCorAzul() {
    let caixa = document.getElementById("produto");
    removerCores();
    caixa.classList.add("cor-azul");
}

function definirCorVerde() {
    let caixa = document.getElementById("produto");
    removerCores();
    caixa.classList.add("cor-verde");
}

function aumentarCaixa() {
    let caixa = document.getElementById("produto");
    caixa.classList.add("caixa-grande");
}
function redefinirCaixa() {
    let caixa = document.getElementById("produto");
    caixa.classList.remove("cor-vermelha");
    caixa.classList.remove("cor-azul");
    caixa.classList.remove("cor-verde");
    caixa.classList.remove("caixa-grande");
  
}