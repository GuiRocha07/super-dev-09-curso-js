function exercicio03CalcularMediaEscolar() {
    const campoNota1 = document.getElementById("nota1");
    const campoNota2 = document.getElementById("nota2");
    const campoNota3 = document.getElementById("nota3");
    const campoResultado = document.getElementById("resultado-media");

    const valor1 = campoNota1.value;
    const valor2 = campoNota2.value;
    const valor3 = campoNota3.value;

    // Validação: campos vazios
    if (valor1 === "" || valor2 === "" || valor3 === "") {
        alert("Preencha todas as três notas antes de calcular.");
        return;
    }

    const nota1 = parseFloat(valor1);
    const nota2 = parseFloat(valor2);
    const nota3 = parseFloat(valor3);

    // Validação: notas fora do intervalo
    if (nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10) {
        alert("As notas devem ser entre 0 e 10.");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado ✅";
    } else if (media >= 5) {
        situacao = "Recuperação ⚠️";
    } else {
        situacao = "Reprovado ❌";
    }

    campoResultado.value = `
Nota 1:   ${nota1.toFixed(1)}
Nota 2:   ${nota2.toFixed(1)}
Nota 3:   ${nota3.toFixed(1)}
─────────────────
Média:    ${media.toFixed(2)}
Situação: ${situacao}
    `;
}