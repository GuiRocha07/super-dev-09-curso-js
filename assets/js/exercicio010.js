function exercicio10GerarOrcamentoEvento() {
    const campoNome = document.getElementById("nome-responsavel");
    const campoConvidados = document.getElementById("quantidade-convidados");
    const campoTipoEvento = document.getElementById("tipo-evento");
    const campoPacote = document.querySelector("[name='pacote']:checked");
    const campoData = document.getElementById("data-evento");
    const campoDecoracao = document.getElementById("decoracao-especial");
    const campoFotografia = document.getElementById("fotografia");
    const campoMusica = document.getElementById("musica");
    const campoResultado = document.getElementById("resultado-evento");

    const nome = campoNome.value;
    const valorConvidados = campoConvidados.value;
    const tipoEvento = campoTipoEvento.value;
    const data = campoData.value;
    const decoracao = campoDecoracao.checked;
    const fotografia = campoFotografia.checked;
    const musica = campoMusica.checked;

    // Validações
    if (valorConvidados === "" || parseInt(valorConvidados) <= 0) {
        alert("Por favor, informe a quantidade de convidados.");
        return;
    }

    if (tipoEvento === "Selecione o tipo de evento") {
        alert("Por favor, selecione o tipo de evento.");
        return;
    }

    if (campoPacote === null) {
        alert("Por favor, selecione um pacote.");
        return;
    }

    if (data === "") {
        alert("Por favor, informe a data do evento.");
        return;
    }

    const convidados = parseInt(valorConvidados);
    const pacote = campoPacote.value;

    // Valor por convidado conforme tipo de evento
    let valorPorConvidado = 0;

    if (tipoEvento === "Casamento") {
        valorPorConvidado = 150;
    } else if (tipoEvento === "Aniversário") {
        valorPorConvidado = 80;
    } else if (tipoEvento === "Formatura") {
        valorPorConvidado = 100;
    } else if (tipoEvento === "Corporativo") {
        valorPorConvidado = 120;
    }

    // Multiplicador conforme pacote
    let multiplicador = 1.0;

    if (pacote === "Standard") {
        multiplicador = 1.3;
    } else if (pacote === "Premium") {
        multiplicador = 1.6;
    }

    // Cálculo base
    const valorBase = convidados * valorPorConvidado * multiplicador;

    // Adicionais
    const valorDecoracao = decoracao ? 800 : 0;
    const valorFotografia = fotografia ? 1200 : 0;
    const valorMusica = musica ? 600 : 0;

    const total = valorBase + valorDecoracao + valorFotografia + valorMusica;

    campoResultado.value = `
══════════════════════════════════
       ORÇAMENTO DE EVENTO
══════════════════════════════════
Responsável:    ${nome !== "" ? nome : "Não informado"}
Tipo de evento: ${tipoEvento}
Data:           ${data}
Convidados:     ${convidados}
Pacote:         ${pacote} (x${multiplicador.toFixed(1)})

──────────────────────────────────
CÁLCULO BASE
──────────────────────────────────
Valor por convidado: R$ ${valorPorConvidado.toFixed(2)}
Subtotal base:       R$ ${valorBase.toFixed(2)}

──────────────────────────────────
ADICIONAIS
──────────────────────────────────
Decoração especial: ${decoracao ? "Sim - R$ 800,00" : "Não solicitada"}
Fotografia:         ${fotografia ? "Sim - R$ 1.200,00" : "Não solicitada"}
Música:             ${musica ? "Sim - R$ 600,00" : "Não solicitada"}

══════════════════════════════════
TOTAL: R$ ${total.toFixed(2)}
══════════════════════════════════
    `;
}