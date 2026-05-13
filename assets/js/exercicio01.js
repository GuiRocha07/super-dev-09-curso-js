function exercicio01CompararDoisNumeros() {
    const campoNumero1 = document.getElementById("numero1");
    const campoNumero2 = document.getElementById("numero2");

    const valor1 = campoNumero1.value;
    const valor2 = campoNumero2.value;

    // Validação: campos vazios
    if (valor1 === "" || valor2 === "") {
        alert("Preencha os dois campos antes de comparar.");
        return;
    }

    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    if (numero1 === numero2) {
        alert(`Os dois números são iguais (${numero1}).`);
    } else if (numero1 > numero2) {
        alert(`O primeiro número (${numero1}) é maior que o segundo (${numero2}).`);
    } else {
        alert(`O segundo número (${numero2}) é maior que o primeiro (${numero1}).`);
    }

    // Limpar os campos e focar no primeiro
    campoNumero1.value = "";
    campoNumero2.value = "";
    campoNumero1.focus();
}