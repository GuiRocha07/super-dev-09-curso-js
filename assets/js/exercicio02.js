function exercicio02ClassificarIdade() {
    const campoNome = document.getElementById("nome");
    const campoIdade = document.getElementById("idade");

    const nome = campoNome.value;
    const valor = campoIdade.value;

    // Validação: campo idade vazio
    if (valor === "") {
        alert("Por favor, informe a idade.");
        return;
    }

    const idade = parseInt(valor);

    // Validação: idade inválida (negativa ou não é número)
    if (isNaN(idade) || idade < 0) {
        alert("Por favor, informe uma idade válida.");
        return;
    }

    let classificacao = "";

    if (idade <= 12) {
        classificacao = "Criança";
    } else if (idade <= 17) {
        classificacao = "Adolescente";
    } else if (idade <= 59) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    // Monta a mensagem com ou sem nome
    if (nome !== "") {
        alert(`${nome} é ${classificacao}.`);
    } else {
        alert(`Classificação: ${classificacao}.`);
    }

    // Limpar os campos e focar no nome
    campoNome.value = "";
    campoIdade.value = "";
    campoNome.focus();
}