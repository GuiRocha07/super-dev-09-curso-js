function exercicio07CadastrarAlunoTurnoCurso() {
    const campoNome = document.getElementById("nome-aluno");
    const campoTurno = document.querySelector("[name='turno']:checked");
    const campoCurso = document.getElementById("curso");
    const campoResultado = document.getElementById("resultado-aluno");

    const nome = campoNome.value;
    const curso = campoCurso.value;

    // Validação: turno não selecionado
    if (campoTurno === null) {
        alert("Por favor, selecione um turno.");
        return;
    }

    const turno = campoTurno.value;

    // Validação: curso não selecionado
    if (curso === "Selecione um curso") {
        alert("Por favor, selecione um curso.");
        return;
    }

    // Mensagem diferente por turno
    let mensagemTurno = "";

    if (turno === "Matutino") {
        mensagemTurno = "Bom dia! Aulas das 07h às 12h.";
    } else if (turno === "Vespertino") {
        mensagemTurno = "Boa tarde! Aulas das 13h às 18h.";
    } else if (turno === "Noturno") {
        mensagemTurno = "Boa noite! Aulas das 19h às 22h.";
    }

    campoResultado.value = `
Nome:    ${nome !== "" ? nome : "Não informado"}
Turno:   ${turno}
Curso:   ${curso}

${mensagemTurno}
    `;
}
