function cadastrarEmpresa(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";
    // resquest body
    const dados = {
        nome: "GuilhermeRocha$ LTDA",
        cnpj: "19.783.660/0001-14"
    }
     //Fetch é a função que permite fazer a requisição do front para o back
    fetch(url,{
        method: "POST", // Serve para cadastrar 
        headers: {
            //serve para dizer a forma que esta sendo enviado
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados) // converter de objeto(dicionário) para string
    })
    .then(response => response.json()) // convertendo string para objeto
    .then(dado => {
        // Aqui é quando deu certo 
        alert("Empresa foi cadastrada com sucesso")
    })
    .catch(error => {
        //Código executado quando ocorre algum erro
        console.error("Erro:" + error);
        alert("Ocorreu um erro ao tentar cadastrar a empresa");

    })
}
function listarEmpresas(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";
    const textarea = document.getElementById("empresas");

    // Limpar o textoarea
    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(empresas => {
        
        for(let i = 0; i < empresas.length; i++){
            const empresa = empresas[i];
            const texto = `${empresa.id} | ${empresa.nome} | ${empresa.cnpj}\n`;
            textarea.value = textarea.value + texto;
        }

    })
    .catch(error => {
        //Codigo executado quando ocorre algum erro 
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao tentar listar as empresas ");

    })

}
function apagarEmpresa() {
    const idParaApagar = parseInt(prompt("Digite o id para apagar"));

    // ID da empresa que será apagada
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/";

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dados => {
        alert("Empresa apagada com sucesso");
        listarEmpresas();

    })
    .catch(error => {
        //Codigo executado quando ocorre algum erro
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao tentar apagar a empresa ");

        })
}
function consultarEmpresaPorId(){
    const idParaConsultar = parseInt(prompt("Digite o id para consultar"));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaConsultar ;

    const textarea = document.getElementById("empresas");

    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(empresa => {
        const texto = `ID: ${empresa.id} \nNome: ${empresa.nome}\nCNPJ: ${empresa.cnpj}\n`;
        textarea.value = textarea.value + texto;
    })
    .catch(error => {
        // Codigo executado quando ocorre algum erro 
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao tentar listar as empresas");

    })

}
function editarEmpresa(){
    const idParaEditar = parseInt(prompt("Digite o id para consultar"));
    const novoNome = prompt("Digite o novo nome ");
    const novoCnpj = prompt("Digite o novo cnpj ");

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaEditar;
    const dados = {
        nome: novoNome,
        cnpj: novoCnpj
    }
    fetch(url, {
        method: "PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(dados)
    })
    .then(response => response)
    .then(empresa => {
        alert("Empresa alterada com sucesso");
        listarEmpresas();

    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao tentar alterar a empresa");
    })    
}


