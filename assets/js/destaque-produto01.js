
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

function aplicarPerfil() {

    // Pegar os valores dos campos
    const campoNome = document.getElementById("nome-cliente");
    const nome = campoNome.value;

    const campoTema = document.getElementById("tema");
    const tema = campoTema.value;

    const campoDestaque = document.getElementById("modoDestaque");
    const destaque = campoDestaque.checked;

    // Validar nome
    if (nome === "") {
        alert("Preencha o nome!");
        campoNome.focus();
        return;
    }

    // Validar tema
    if (campoTema.selectedIndex === 0) {
        alert("Selecione um tema!");
        return;
    }

    // Atualizar o card
    const card = document.getElementById("card");
    const cardNome = document.getElementById("card-nome");
    const cardDescricao = document.getElementById("card-descricao");

    cardNome.textContent = nome;
    cardDescricao.textContent = "Tema: " + campoTema.options[campoTema.selectedIndex].text;

    // Remover classes anteriores
    card.classList.remove("fundo-escuro", "fundo-claro", "fundo-verde", "destaque");

    // Aplicar tema
    card.classList.add(tema);

    // Aplicar destaque
    if (destaque) {
        card.classList.add("destaque");
    }
}
// ===== ATIVIDADE 3 - Cadastro com Tipo de Contato =====

function mostrarTipo() {
    // Pegar qual radio está marcado
    const tipoMarcado = document.querySelector("[name='tipo-contato']:checked");
    const tipo = tipoMarcado.value;

    // Pegar as duas áreas
    const areaPessoal   = document.getElementById("area-pessoal");
    const areaComercial = document.getElementById("area-comercial");

    // Esconder as duas primeiro
    areaPessoal.classList.add("escondido");
    areaComercial.classList.add("escondido");
    areaPessoal.classList.remove("area-visivel");
    areaComercial.classList.remove("area-visivel");

    // Mostrar só a área escolhida
    if (tipo === "pessoal") {
        areaPessoal.classList.remove("escondido");
        areaPessoal.classList.add("area-visivel");
    } else if (tipo === "comercial") {
        areaComercial.classList.remove("escondido");
        areaComercial.classList.add("area-visivel");
    }
}

function validarCadastro() {

    // Pegar nome
    const campoNome = document.getElementById("nome-contato");
    const nome = campoNome.value;

    // Validar nome
    if (nome === "") {
        alert("Preencha o nome!");
        campoNome.focus();
        return;
    }

    // Pegar tipo selecionado
    const tipoMarcado = document.querySelector("[name='tipo-contato']:checked");

    // Validar tipo
    if (tipoMarcado === null) {
        alert("Escolha um tipo de contato!");
        return;
    }

    const tipo = tipoMarcado.value;
    let resumo = "";

    if (tipo === "pessoal") {
        const telefone       = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("data-nascimento").value;

        // Validar campos pessoais
        if (telefone === "") {
            alert("Preencha o telefone!");
            return;
        }
        if (dataNascimento === "") {
            alert("Preencha a data de nascimento!");
            return;
        }

        resumo = `Tipo: Pessoal
Nome: ${nome}
Telefone: ${telefone}
Data de Nascimento: ${dataNascimento}`;

    } else if (tipo === "comercial") {
        const empresa           = document.getElementById("empresa").value;
        const cnpj              = document.getElementById("cnpj").value;
        const telefoneComercial = document.getElementById("telefone-comercial").value;

        // Validar campos comerciais
        if (empresa === "") {
            alert("Preencha o nome da empresa!");
            return;
        }
        if (cnpj === "") {
            alert("Preencha o CNPJ!");
            return;
        }
        if (telefoneComercial === "") {
            alert("Preencha o telefone comercial!");
            return;
        }

        resumo = `Tipo: Comercial
Nome: ${nome}
Empresa: ${empresa}
CNPJ: ${cnpj}
Telefone Comercial: ${telefoneComercial}`;
    }

    // Mostrar resumo
    const divResumo    = document.getElementById("resumo");
    const textoResumo  = document.getElementById("texto-resumo");

    textoResumo.value = resumo;
    divResumo.classList.remove("escondido");
}