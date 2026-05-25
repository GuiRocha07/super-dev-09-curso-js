function calcularImc() {

    // 1. Pegar os campos
    const campoNome   = document.getElementById("nome-imc");
    const campoPeso   = document.getElementById("peso");
    const campoAltura = document.getElementById("altura");

    const nome        = campoNome.value;
    const valorPeso   = campoPeso.value;
    const valorAltura = campoAltura.value;

    // 2. Validar peso
    if (valorPeso === "") {
        alert("Por favor, informe o peso.");
        campoPeso.focus();
        return;
    }

    // 3. Validar altura
    if (valorAltura === "") {
        alert("Por favor, informe a altura.");
        campoAltura.focus();
        return;
    }

    const peso   = parseFloat(valorPeso);
    const altura = parseFloat(valorAltura);

    // 4. Validar se os números fazem sentido
    if (peso <= 0 || isNaN(peso)) {
        alert("Informe um peso válido.");
        return;
    }

    if (altura <= 0 || altura > 3 || isNaN(altura)) {
        alert("Informe uma altura válida. Ex: 1.75");
        return;
    }

    // 5. Calcular o IMC
    // Fórmula: IMC = peso / (altura * altura)
    const imc = peso / (altura * altura);

    // 6. Classificar o IMC (3 faixas)
    let classificacao = "";
    let classeCss     = "";
    let ehAtencao     = false;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        classeCss     = "imc-abaixo";
        ehAtencao     = true;
    } else if (imc < 25) {
        classificacao = "Peso normal";
        classeCss     = "imc-normal";
        ehAtencao     = false;
    } else {
        classificacao = "Obesidade";
        classeCss     = "imc-obesidade";
        ehAtencao     = true;
    }

    // 7. Pegar os elementos do resultado
    const areaResultado      = document.getElementById("resultado-imc");
    const caixaClassificacao = document.getElementById("caixa-classificacao");
    const textoResultado     = document.getElementById("texto-resultado");
    const caixaAtencao       = document.getElementById("caixa-atencao");

    // 8. Escrever o texto do resultado
    const nomeExibido = nome !== "" ? nome : "Resultado";
    textoResultado.textContent = `${nomeExibido} — IMC: ${imc.toFixed(2)} — ${classificacao}`;

    // 9. Aplicar a cor da classificação
    caixaClassificacao.classList.remove("imc-abaixo", "imc-normal", "imc-obesidade");
    caixaClassificacao.classList.add(classeCss);

  // 10. Mostrar ou esconder a caixa de atenção
caixaAtencao.classList.add("oculto");

if (ehAtencao) {
    caixaAtencao.classList.remove("oculto");
}

    // 11. Mostrar a área de resultado
    areaResultado.classList.remove("oculto");
}

function esconderResultado() {
    const areaResultado = document.getElementById("resultado-imc");
    areaResultado.classList.add("oculto");
}