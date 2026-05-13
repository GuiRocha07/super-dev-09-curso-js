function exercicio06CalcularContaRestaurante() {
    const campoNome = document.getElementById("nome-cliente");
    const campoValor = document.getElementById("valor-consumido");
    const campoTaxa = document.getElementById("taxa-servico");
    const campoResultado = document.getElementById("resultado-restaurante");

    const nome = campoNome.value;
    const valorDigitado = campoValor.value;
    const taxaMarcada = campoTaxa.checked;

    // Validação: valor vazio
    if (valorDigitado === "") {
        alert("Por favor, informe o valor consumido.");
        return;
    }

    const valorConsumido = parseFloat(valorDigitado);

    // Validação: valor inválido
    if (isNaN(valorConsumido) || valorConsumido <= 0) {
        alert("Por favor, informe um valor válido.");
        return;
    }

    let valorTaxa = 0;

    if (taxaMarcada) {
        valorTaxa = valorConsumido * 0.10;
    }

    const totalPagar = valorConsumido + valorTaxa;

    campoResultado.value = `
Cliente:          ${nome !== "" ? nome : "Não informado"}
Valor consumido:  R$ ${valorConsumido.toFixed(2)}
Taxa de serviço:  ${taxaMarcada ? "Sim - R$ " + valorTaxa.toFixed(2) : "Não incluída"}
Total a pagar:    R$ ${totalPagar.toFixed(2)}
    `;
}