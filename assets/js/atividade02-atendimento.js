function listarAtendimento() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos";
    const textarea = document.getElementById("atendimentos");

    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(atendimentos => {

        for (let i = 0; i < atendimentos.length; i++) {
            const atendimento = atendimentos[i];
            const texto = `ID: ${atendimento.id} | Cliente: ${atendimento.cliente} | Tipo: ${atendimento.tipoAtendimento} | Descrição: ${atendimento.descricao} | Atendente: ${atendimento.atendente} | Duração: ${atendimento.duracaoMinutos} min\n`;
            textarea.value = textarea.value + texto;
        }

    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao listar os Atendimentos.");
    });
}

function cadastrarAtendimento() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos";

    const cliente         = prompt("Digite o nome do cliente:");
    const tipoAtendimento = prompt("Digite o tipo de atendimento:");
    const descricao       = prompt("Digite a descrição:");
    const atendente       = prompt("Digite o atendente:");
    const duracaoMinutos  = parseFloat(prompt("Digite a duração em minutos:"));

    const dados = {
        cliente:         cliente,
        tipoAtendimento: tipoAtendimento,
        descricao:       descricao,
        atendente:       atendente,
        duracaoMinutos:  duracaoMinutos
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dado => {
        alert("Atendimento cadastrado com sucesso!");
        listarAtendimento();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao cadastrar o atendimento.");
    });
}

function consultarAtendimento() {
    const idDigitado = prompt("Digite o ID do atendimento:");

    if (idDigitado === null || idDigitado === "") {
        alert("ID não informado!");
        return;
    }

    const id  = parseInt(idDigitado);
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + id;

    const textarea = document.getElementById("atendimentos");
    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(atendimento => {
        const texto = `ID: ${atendimento.id}\nCliente: ${atendimento.cliente}\nTipo: ${atendimento.tipoAtendimento}\nDescrição: ${atendimento.descricao}\nAtendente: ${atendimento.atendente}\nDuração: ${atendimento.duracaoMinutos} min\n`;
        textarea.value = texto;
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao consultar o atendimento.");
    });
}

function editarAtendimento() {
    const idDigitado = prompt("Digite o ID do atendimento que deseja editar:");

    if (idDigitado === null || idDigitado === "") {
        alert("ID não informado!");
        return;
    }

    const id              = parseInt(idDigitado);
    const cliente         = prompt("Digite o novo nome do cliente:");
    const tipoAtendimento = prompt("Digite o novo tipo de atendimento:");
    const descricao       = prompt("Digite a nova descrição:");
    const atendente       = prompt("Digite o novo atendente:");
    const duracaoMinutos = parseInt(prompt("Digite a duração em minutos:"));

    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + id;

   const dados = {
    dto: {
        cliente:         cliente,
        tipoAtendimento: tipoAtendimento,
        descricao:       descricao,
        atendente:       atendente,
        duracaoMinutos:  duracaoMinutos
    }
};
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response)
    .then(dado => {
        alert("Atendimento editado com sucesso!");
        listarAtendimento();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao editar o atendimento.");
    });
}

function apagarAtendimento() {
    const idDigitado = prompt("Digite o ID do atendimento que deseja apagar:");

    if (idDigitado === null || idDigitado === "") {
        alert("ID não informado!");
        return;
    }

    const id  = parseInt(idDigitado);
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + id;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dado => {
        alert("Atendimento apagado com sucesso!");
        listarAtendimento();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao apagar o atendimento.");
    });
}