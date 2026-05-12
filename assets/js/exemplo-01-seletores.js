function concatenar(){
    //get element by => pegar element
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;

    const campoSobreNome = document.getElementById("sobreNome");
    const sobreNome = campoSobreNome.value;

    //alert(nome + " " + sobreNome );
    alert(`Nome completo: ${nome} ${sobreNome}`);

}
function verificarPar(){
    const campoNumero = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero.value);

    if(numero1 % 2 === 0 ){
        alert("Número é par");
    }   else {
        alert("Número é impar");
    }
    //Limpar o campo
    campoNumero.value = "";
    // Colocar o cursor no campo
    campoNumero.focus();   
}
function processarPedido(){
    const campoCliente = document.getElementById("cliente");
    const cliente = campoCliente.value;

    const campoQuantidadeLicenca = document.getElementById("quantidade-licencas");
    const quantidadeLicenca = parseInt(campoQuantidadeLicencas.value);

    const campoTipo = document.querySelector("[name='tipo']:checked");
    if(campoTipo === null){
        alert("Selecione um tipo");
        return;
        }

    const campoDataEncerramento = document.getElementById("data-encerramento-contrato");
    const dataEncerramento = campoDataEncerramento.value;

    const campoBackup = documento.getElementById("backup");
    const backup = campoBackup.checked;

    let precoBase = 0;
    if(tipo === "ERP"){
        precoBase = 250;

    } else if(tipo === "Hospital"){
        precoBase = 400;
    } else if(tipo === "Oficina"){
        precoBase = 100;
    }

    let multiplicadorPlano = 1.0;
    if(plano ==="Intermediário"){
        multiplicadorPlano = 1.5;
    } else if (plano === "Avançado"){
        multiplicadorPlano = 2.0;   
    }

    let total = quantidadeLicencas * precoBase * multiplicadorPlano;

    const campoResultado = document.getElementById("resultado");
    campoResultado.value = `
    Cliente: ${cliente}
    Quantidade de Licenças: ${quantidadeLicencas}
    Tipo: ${tipo}
    Plano: ${plano}
    Data de Encerramento: ${dataEncerramento}
    Backup: ${backup}
    preco base: R$ ${precoBase.toFixed(2)}
    multiplicador do Plano: ${multiplicadorPlano}
    total : R$ ${total.toFixed(2)} `
}
