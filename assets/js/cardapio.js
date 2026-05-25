function adicionarPrato() {

    // 1. Pegar os campos
    const campoNome      = document.getElementById("nome-prato");
    const campoPreco     = document.getElementById("preco-prato");
    const campoCategoria = document.getElementById("categoria");

    const nome      = campoNome.value;
    const preco     = campoPreco.value;
    const categoria = campoCategoria.value;

    // 2. Validar campos
    if (nome === "") {
        alert("Digite o nome do prato!");
        campoNome.focus();
        return;
    }

    if (preco === "") {
        alert("Digite o preço do prato!");
        campoPreco.focus();
        return;
    }

    if (categoria === "") {
        alert("Selecione a categoria!");
        return;
    }

    // 3. Definir o emoji de cada categoria
    let emojiCategoria = "";

    if (categoria === "lanche") {
        emojiCategoria = "🍔 Lanche";
    } else if (categoria === "bebida") {
        emojiCategoria = "🥤 Bebida";
    } else if (categoria === "sobremesa") {
        emojiCategoria = "🍰 Sobremesa";
    }

    // 4. Criar o card com createElement (padrão do professor)
    const divCardPrato = document.createElement("div");
    divCardPrato.classList.add("card-prato");
    divCardPrato.classList.add("card-" + categoria); // ex: card-lanche

    const h3Nome = document.createElement("h3");
    h3Nome.innerText = nome;

    const pPreco = document.createElement("p");
    pPreco.classList.add("card-preco");
    pPreco.innerText = "R$ " + parseFloat(preco).toFixed(2);

    const pCategoria = document.createElement("p");
    pCategoria.classList.add("card-categoria");
    pCategoria.innerText = emojiCategoria;

    // 5. Montar o card com appendChild
    divCardPrato.appendChild(h3Nome);
    divCardPrato.appendChild(pPreco);
    divCardPrato.appendChild(pCategoria);

    // 6. Adicionar o card na área do cardápio
    const areaCardapio = document.getElementsByClassName("area-cardapio")[0];
    areaCardapio.appendChild(divCardPrato);

    // 7. Limpar os campos
    campoNome.value = "";
    campoPreco.value = "";
    campoCategoria.selectedIndex = 0;
    campoNome.focus();
}


function publicarRecado() {

    // 1. Pegar os campos
    const campoNome   = document.getElementById("nome-pessoa");
    const campoRecado = document.getElementById("texto-recado");

    const nome   = campoNome.value;
    const recado = campoRecado.value;

    // 2. Validar campos
    if (nome === "") {
        alert("Digite o seu nome!");
        campoNome.focus();
        return;
    }

    if (recado === "") {
        alert("Digite o recado!");
        campoRecado.focus();
        return;
    }

    // 3. Pegar o horário atual (igual ao exemplo do professor)
    const agora = new Date();
    const horario = agora.toLocaleTimeString("pt-BR", {
        hour:   "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    // 4. Criar o card com createElement (padrão do professor)
    const divCardRecado = document.createElement("div");
    divCardRecado.classList.add("card-recado");

    const pNome = document.createElement("p");
    pNome.classList.add("recado-nome");
    pNome.innerText = " " + nome;

    const pTexto = document.createElement("p");
    pTexto.classList.add("recado-texto");
    pTexto.innerText = recado;

    const pHorario = document.createElement("p");
    pHorario.classList.add("recado-horario");
    pHorario.innerText = " Publicado às " + horario;

    // 5. Montar o card com appendChild
    divCardRecado.appendChild(pNome);
    divCardRecado.appendChild(pTexto);
    divCardRecado.appendChild(pHorario);

    // 6. Adicionar o recado mais novo ANTES dos antigos
    const areaMural = document.getElementsByClassName("area-mural")[0];

    if (areaMural.firstChild) {
        // Se já tem recados, insere antes do primeiro
        areaMural.insertBefore(divCardRecado, areaMural.firstChild);
    } else {
        // Se é o primeiro recado, só adiciona
        areaMural.appendChild(divCardRecado);
    }

    // 7. Limpar os campos
    campoNome.value   = "";
    campoRecado.value = "";
    campoNome.focus();
}


function cadastrarLivro() {

    // 1. Pegar os campos
    const campoNome   = document.getElementById("nome-livro");
    const campoAutor  = document.getElementById("autor-livro");
    const campoStatus = document.getElementById("status-livro");

    const nome   = campoNome.value;
    const autor  = campoAutor.value;
    const status = campoStatus.value;

    // 2. Validar campos
    if (nome === "") {
        alert("Digite o nome do livro!");
        campoNome.focus();
        return;
    }

    if (autor === "") {
        alert("Digite o autor do livro!");
        campoAutor.focus();
        return;
    }

    if (status === "") {
        alert("Selecione o status do livro!");
        return;
    }

    // 3. Criar o card com createElement (padrão do professor)
    const divCardLivro = document.createElement("div");
    divCardLivro.classList.add("card-livro");
    divCardLivro.classList.add("card-" + status); // card-disponivel ou card-emprestado

    const h3Nome = document.createElement("h3");
    h3Nome.innerText = " " + nome;

    const pAutor = document.createElement("p");
    pAutor.classList.add("livro-autor");
    pAutor.innerText = " " + autor;

    const pStatus = document.createElement("p");
    pStatus.classList.add("livro-status");
    pStatus.innerText = status === "disponivel" ? " Disponível" : " Emprestado";

    const btnStatus = document.createElement("button");
    btnStatus.classList.add("btn-status");
    btnStatus.innerText = status === "disponivel" ? "Marcar como Emprestado" : "Marcar como Disponível";

    // 4. Montar o card
    divCardLivro.appendChild(h3Nome);
    divCardLivro.appendChild(pAutor);
    divCardLivro.appendChild(pStatus);
    divCardLivro.appendChild(btnStatus);

    // 5. Função do botão para trocar o status
    btnStatus.onclick = function() {
        alterarStatus(divCardLivro, pStatus, btnStatus);
    };

    // 6. Adicionar o card na área da biblioteca
    const areaBiblioteca = document.getElementsByClassName("area-biblioteca")[0];
    areaBiblioteca.appendChild(divCardLivro);

    // 7. Limpar os campos
    campoNome.value = "";
    campoAutor.value = "";
    campoStatus.selectedIndex = 0;
    campoNome.focus();
}

function alterarStatus(card, pStatus, btnStatus) {

    // Verifica o status atual pelo que está na classe do card
    if (card.classList.contains("card-disponivel")) {

        // Troca para emprestado
        card.classList.remove("card-disponivel");
        card.classList.add("card-emprestado");
        pStatus.innerText = " Emprestado";
        btnStatus.innerText = "Marcar como Disponível";

    } else {

        // Troca para disponível
        card.classList.remove("card-emprestado");
        card.classList.add("card-disponivel");
        pStatus.innerText = "✅ Disponível";
        btnStatus.innerText = "Marcar como Emprestado";
    }
}



function adicionarPedido() {

    // 1. Pegar os campos
    const campoCliente    = document.getElementById("nome-cliente-pizza");
    const campoSabor      = document.getElementById("sabor-pizza");
    const campoQuantidade = document.getElementById("quantidade-pizza");

    const cliente    = campoCliente.value;
    const sabor      = campoSabor.value;
    const quantidade = campoQuantidade.value;

    // 2. Validar campos
    if (cliente === "") {
        alert("Digite o nome do cliente!");
        campoCliente.focus();
        return;
    }

    if (sabor === "") {
        alert("Selecione o sabor da pizza!");
        return;
    }

    if (quantidade === "" || parseInt(quantidade) < 1) {
        alert("Digite uma quantidade válida!");
        campoQuantidade.focus();
        return;
    }

    // 3. Pegar o horário atual (igual ao exemplo do professor)
    const agora = new Date();
    const horario = agora.toLocaleTimeString("pt-BR", {
        hour:   "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    // 4. Criar o card com createElement (padrão do professor)
    const divCardPedido = document.createElement("div");
    divCardPedido.classList.add("card-pedido");

    // Se quantidade maior que 3, adiciona classe de destaque
    if (parseInt(quantidade) > 3) {
        divCardPedido.classList.add("pedido-grande");
    }

    const h3Cliente = document.createElement("h3");
    h3Cliente.innerText = " " + cliente;

    const pSabor = document.createElement("p");
    pSabor.classList.add("pedido-sabor");
    pSabor.innerText = " Sabor: " + sabor;

    const pQuantidade = document.createElement("p");
    pQuantidade.classList.add("pedido-quantidade");
    pQuantidade.innerText = " Quantidade: " + quantidade;

    const pHorario = document.createElement("p");
    pHorario.classList.add("pedido-horario");
    pHorario.innerText = " Pedido feito às " + horario;

    const btnEntregar = document.createElement("button");
    btnEntregar.classList.add("btn-entregar");
    btnEntregar.innerText = "Marcar como Entregue";

    // 5. Montar o card
    divCardPedido.appendChild(h3Cliente);
    divCardPedido.appendChild(pSabor);
    divCardPedido.appendChild(pQuantidade);
    divCardPedido.appendChild(pHorario);
    divCardPedido.appendChild(btnEntregar);

    // 6. Função do botão marcar como entregue
    btnEntregar.onclick = function() {
        marcarEntregue(divCardPedido, btnEntregar);
    };

    // 7. Novos pedidos aparecem antes dos antigos
    const areaPedidos = document.getElementsByClassName("area-pedidos")[0];

    if (areaPedidos.firstChild) {
        areaPedidos.insertBefore(divCardPedido, areaPedidos.firstChild);
    } else {
        areaPedidos.appendChild(divCardPedido);
    }

    // 8. Limpar os campos
    campoCliente.value = "";
    campoSabor.selectedIndex = 0;
    campoQuantidade.value = "";
    campoCliente.focus();
}

function marcarEntregue(card, btn) {

    // Troca a aparência do card para entregue
    card.classList.add("card-entregue");

    // Atualiza o texto do botão
    btn.innerText = " Entregue!";

    // Desativa o botão para não clicar de novo
    btn.onclick = null;
}



// Guarda a lista de jogadores para calcular o maior pontuador
const listaJogadores = [];

function adicionarJogador() {

    // 1. Pegar os campos
    const campoNome       = document.getElementById("nome-jogador");
    const campoPontuacao  = document.getElementById("pontuacao-jogador");

    const nome      = campoNome.value;
    const pontuacao = campoPontuacao.value;

    // 2. Validar campos
    if (nome === "") {
        alert("Digite o nome do jogador!");
        campoNome.focus();
        return;
    }

    if (pontuacao === "" || parseInt(pontuacao) < 0) {
        alert("Digite uma pontuação válida!");
        campoPontuacao.focus();
        return;
    }

    // 3. Salvar jogador na lista
    listaJogadores.push({
        nome:      nome,
        pontuacao: parseInt(pontuacao)
    });

    // 4. Recriar o ranking ordenado por pontuação
    atualizarRanking();

    // 5. Atualizar o maior pontuador
    atualizarMaiorPontuador();

    // 6. Limpar os campos
    campoNome.value      = "";
    campoPontuacao.value = "";
    campoNome.focus();
}

function atualizarRanking() {

    // Pega a área do ranking
    const areaRanking = document.getElementsByClassName("area-ranking")[0];

    // Limpa o ranking atual
    areaRanking.innerHTML = "";

    // Ordena do maior para o menor
    const jogadoresOrdenados = listaJogadores.slice().sort(function(a, b) {
        return b.pontuacao - a.pontuacao;
    });

    // Cria um card para cada jogador
    for (let i = 0; i < jogadoresOrdenados.length; i++) {

        const jogador   = jogadoresOrdenados[i];
        const posicao   = i + 1;

        // Criar o card com createElement (padrão do professor)
        const divCard = document.createElement("div");
        divCard.classList.add("card-jogador");

        // Primeiro lugar recebe classe especial
        if (posicao === 1) {
            divCard.classList.add("card-primeiro");

        // Pontuação acima de 1000 recebe classe especial
        } else if (jogador.pontuacao > 1000) {
            divCard.classList.add("card-pontuacao-alta");
        }

        // Lado esquerdo: posição e nome
        const divInfo = document.createElement("div");

        const pNome = document.createElement("p");
        pNome.classList.add("jogador-nome");

        // Emoji de medalha para os 3 primeiros
        let medalha = "";
        if      (posicao === 1) { medalha = "🥇 "; }
        else if (posicao === 2) { medalha = "🥈 "; }
        else if (posicao === 3) { medalha = "🥉 "; }
        else                    { medalha = posicao + "º "; }

        pNome.innerText = medalha + jogador.nome;

        const pPosicao = document.createElement("p");
        pPosicao.classList.add("jogador-posicao");
        pPosicao.innerText = "Posição: " + posicao + "º lugar";

        divInfo.appendChild(pNome);
        divInfo.appendChild(pPosicao);

        // Lado direito: pontuação
        const pPontuacao = document.createElement("p");
        pPontuacao.classList.add("jogador-pontuacao");
        pPontuacao.innerText = jogador.pontuacao + " pts";

        // Montar o card
        divCard.appendChild(divInfo);
        divCard.appendChild(pPontuacao);

        // Adicionar na área do ranking
        areaRanking.appendChild(divCard);
    }
}

function atualizarMaiorPontuador() {

    const areaMaior = document.getElementById("area-maior-pontuador");

    // Encontra o jogador com maior pontuação
    let maior = listaJogadores[0];

    for (let i = 1; i < listaJogadores.length; i++) {
        if (listaJogadores[i].pontuacao > maior.pontuacao) {
            maior = listaJogadores[i];
        }
    }

    // Limpa a área
    areaMaior.innerHTML = "";

    // Cria os elementos com createElement (padrão do professor)
    const pTitulo = document.createElement("p");
    pTitulo.classList.add("maior-titulo");
    pTitulo.innerText = "🏆 Maior Pontuador";

    const pNome = document.createElement("p");
    pNome.classList.add("maior-nome");
    pNome.innerText = maior.nome;

    const pPontuacao = document.createElement("p");
    pPontuacao.classList.add("maior-pontuacao");
    pPontuacao.innerText = maior.pontuacao + " pontos";

    // Montar com appendChild
    areaMaior.appendChild(pTitulo);
    areaMaior.appendChild(pNome);
    areaMaior.appendChild(pPontuacao);
}