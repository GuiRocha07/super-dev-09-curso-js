function listarProdutos() {
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";
    const textarea = document.getElementById("produtos");

    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(produtos => {

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];
            const texto = `ID: ${produto.id} | Nome: ${produto.nome} | Preço: ${produto.preco} | Categoria: ${produto.categoria}\n`;
            textarea.value = textarea.value + texto;
        }

    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao listar os produtos.");
    });
}

function cadastrarProduto() {
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";

    const nome      = prompt("Digite o nome do produto:");
    const preco     = parseFloat(prompt("Digite o preço do produto:"));
    const categoria = prompt("Digite a categoria do produto:");

    const dados = {
        nome:      nome,
        preco:     preco,
        categoria: categoria
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dado => {
        alert("Produto cadastrado com sucesso!");
        listarProdutos();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao cadastrar o produto.");
    });
}

function consultarProdutoPorId() {
    const idDigitado = prompt("Digite o ID do produto:");

    if (idDigitado === null || idDigitado === "") {
        alert("ID não informado!");
        return;
    }

    const id  = parseInt(idDigitado);
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + id;

    const textarea = document.getElementById("produtos");
    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(produto => {
        const texto = `ID: ${produto.id}\nNome: ${produto.nome}\nPreço: ${produto.preco}\nCategoria: ${produto.categoria}\n`;
        textarea.value = texto;
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao consultar o produto.");
    });
}

function editarProduto() {
    const idDigitado = prompt("Digite o ID do produto que deseja editar:");

    if (idDigitado === null || idDigitado === "") {
        alert("ID não informado!");
        return;
    }

    const id        = parseInt(idDigitado);
    const nome      = prompt("Digite o novo nome:");
    const preco     = parseFloat(prompt("Digite o novo preço:"));
    const categoria = prompt("Digite a nova categoria:");

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + id;

    const dados = {
        nome:      nome,
        preco:     preco,
        categoria: categoria
    };

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response)
    .then(dado => {
        alert("Produto editado com sucesso!");
        listarProdutos();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao editar o produto.");
    });
}

function apagarProduto() {
    const idDigitado = prompt("Digite o ID do produto que deseja apagar:");

    if (idDigitado === null || idDigitado === "") {
        alert("ID não informado!");
        return;
    }

    const id  = parseInt(idDigitado);
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + id;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dado => {
        alert("Produto apagado com sucesso!");
        listarProdutos();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao apagar o produto.");
    });
}