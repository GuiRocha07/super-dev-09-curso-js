function exercicio05SimularSalario() {
    const campoNome = document.getElementById("nome-funcionario");
    const campoSalario = document.getElementById("salario-atual");
    const campoCargo = document.getElementById("cargo");
    const campoResultado = document.getElementById("resultado-salario");

    const nome = campoNome.value;
    const valorSalario = campoSalario.value;
    const cargo = campoCargo.value;

    // Validação: salário vazio
    if (valorSalario === "") {
        alert("Por favor, informe o salário atual.");
        return;
    }

    const salario = parseFloat(valorSalario);

    // Validação: salário inválido
    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, informe um salário válido.");
        return;
    }

    // Validação: cargo não selecionado
    if (cargo === "Selecione o cargo") {
        alert("Por favor, selecione um cargo.");
        return;
    }

    // Definir porcentagem de acordo com o cargo
    let porcentagem = 0;

    if (cargo === "Assistente") {
        porcentagem = 10;
    } else if (cargo === "Analista") {
        porcentagem = 15;
    } else if (cargo === "Coordenador") {
        porcentagem = 20;
    } else if (cargo === "Gerente") {
        porcentagem = 25;
    }

    const valorAumento = salario * (porcentagem / 100);
    const novoSalario = salario + valorAumento;

    campoResultado.value = `
Funcionário:      ${nome !== "" ? nome : "Não informado"}
Cargo:            ${cargo}
Salário atual:    R$ ${salario.toFixed(2)}
Aumento:          ${porcentagem}% (R$ ${valorAumento.toFixed(2)})
Salário novo:     R$ ${novoSalario.toFixed(2)}
    `;
}