function exercicio08SimularLocacaoCarro() {
    const campoNome = document.getElementById("nome-locatario");
    const campoTipoCarro = document.getElementById("tipo-carro");
    const campoDias = document.getElementById("quantidade-dias");
    const campoSeguro = document.getElementById("seguro");
    const campoCadeiraInfantil = document.getElementById("cadeira-infantil");
    const campoResultado = document.getElementById("resultado-locacao");

    const nome = campoNome.value;
    const tipoCarro = campoTipoCarro.value;
    const valorDias = campoDias.value;
    const seguro = campoSeguro.checked;
    const cadeiraInfantil = campoCadeiraInfantil.checked;

    // Validação: tipo de carro não selecionado
    if (tipoCarro === "Selecione o tipo de carro") {
        alert("Por favor, selecione o tipo de carro.");
        return;
    }

    // Validação: dias vazio ou inválido
    if (valorDias === "" || parseInt(valorDias) <= 0) {
        alert("Por favor, informe uma quantidade de dias válida.");
        return;
    }

    const dias = parseInt(valorDias);

    // Definir diária de acordo com o tipo de carro
    let diaria = 0;

    if (tipoCarro === "Econômico") {
        diaria = 80;
    } else if (tipoCarro === "Intermediário") {
        diaria = 120;
    } else if (tipoCarro === "SUV") {
        diaria = 200;
    } else if (tipoCarro === "Luxo") {
        diaria = 350;
    }

    // Calcular adicionais
    const valorSeguro = seguro ? 30 * dias : 0;
    const valorCadeiraInfantil = cadeiraInfantil ? 15 * dias : 0;

    const subtotal = diaria * dias;
    const total = subtotal + valorSeguro + valorCadeiraInfantil;

    campoResultado.value = `
Cliente:          ${nome !== "" ? nome : "Não informado"}
Tipo de carro:    ${tipoCarro}
Diária:           R$ ${diaria.toFixed(2)}
Dias:             ${dias}
Subtotal:         R$ ${subtotal.toFixed(2)}
Seguro:           ${seguro ? "Sim - R$ " + valorSeguro.toFixed(2) : "Não incluído"}
Cadeira infantil: ${cadeiraInfantil ? "Sim - R$ " + valorCadeiraInfantil.toFixed(2) : "Não incluída"}
─────────────────────────────
Total:            R$ ${total.toFixed(2)}
    `;
}