function exercicio09SimularPlanoInternet() {
    const campoNome = document.getElementById("nome-internet");
    const campoPlano = document.querySelector("[name='plano-internet']:checked");
    const campoInstalacao = document.getElementById("instalacao-imediata");
    const campoRoteador = document.getElementById("roteador-adicional");
    const campoResultado = document.getElementById("resultado-internet");

    const nome = campoNome.value;
    const instalacao = campoInstalacao.checked;
    const roteador = campoRoteador.checked;

    // Validação: plano não selecionado
    if (campoPlano === null) {
        alert("Por favor, selecione um plano.");
        return;
    }

    const plano = campoPlano.value;

    // Definir valor base conforme o plano
    let valorPlano = 0;

    if (plano === "Básico") {
        valorPlano = 79.90;
    } else if (plano === "Intermediário") {
        valorPlano = 119.90;
    } else if (plano === "Avançado") {
        valorPlano = 159.90;
    } else if (plano === "Fibra Total") {
        valorPlano = 219.90;
    }

    // Calcular adicionais
    const valorInstalacao = instalacao ? 50.00 : 0;
    const valorRoteador = roteador ? 35.00 : 0;

    const total = valorPlano + valorInstalacao + valorRoteador;

    campoResultado.value = `
Cliente:              ${nome !== "" ? nome : "Não informado"}
Plano:                ${plano}
Valor do plano:       R$ ${valorPlano.toFixed(2)}/mês
Instalação imediata:  ${instalacao ? "Sim - R$ 50,00" : "Não solicitada"}
Roteador adicional:   ${roteador ? "Sim - R$ 35,00" : "Não solicitado"}
──────────────────────────────────
Total:                R$ ${total.toFixed(2)}
    `;
}