function exercicio04CalcularDescontoProduto() {
    const campoNome = document.getElementById("nome-produto");
    const campoPreco = document.getElementById("preco-produto");
    const campoDesconto = document.getElementById("desconto");
    const campoResultado = document.getElementById("resultado-desconto");

    const nome = campoNome.value;
    const valorPreco = campoPreco.value;
    const valorDesconto = campoDesconto.value;

    // Validação: preço vazio
    if (valorPreco === "") {
        alert("Por favor, informe o preço do produto.");
        return;
    }

    const preco = parseFloat(valorPreco);

    // Validação: preço inválido ou negativo
    if (isNaN(preco) || preco <= 0) {
        alert("Por favor, informe um preço válido.");
        return;
    }

    // Validação: desconto não selecionado
    if (valorDesconto === "Selecione o desconto") {
        alert("Por favor, selecione um desconto.");
        return;
    }

    const porcentagem = parseFloat(valorDesconto);
    const valorDoDesconto = preco * (porcentagem / 100);
    const precoFinal = preco - valorDoDesconto;

    campoResultado.value = `
Produto:        ${nome !== "" ? nome : "Não informado"}
Preço original: R$ ${preco.toFixed(2)}
Desconto:       ${porcentagem}% (R$ ${valorDoDesconto.toFixed(2)})
Preço final:    R$ ${precoFinal.toFixed(2)}
    `;
}