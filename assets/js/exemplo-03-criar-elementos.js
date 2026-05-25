function adicionarAluno(){
    const campoNome= document.getElementById("campo-nome");
    const nome = campoNome.value;

    if(nome.length === 0) {
        alert("Digite o nome do aluno");
        campoNome.focus();
        return;
    }
    
    /*
    GERAR O HTML
    <div class = "card-aluno">
        <h3>Matheus</h3>
        <p>Akuno Cadastrado com JavaScript</p>
        </div>  
        */


    const divCardAluno = document.createElement("div"); //<div></div>
    divCardAluno.classList.add("card-aluno"); //<div class="card-aluno"></div>

    const h3NomeAluno = document.createElement("h3");
    h3NomeAluno.innerText = nome;

    const pMenssagem = document.createElement("p");
    pMenssagem.innerText = "aluno cadastrado com JavaScript";
    
    divCardAluno.appendChild(h3NomeAluno);
    divCardAluno.appendChild(pMenssagem);

    //Pegar o elemento (lista-alunos) que eu adicionarei a nova div 
    
    const divListaAlunos = document.getElementsByClassName("lista-alunos")[0];
    divListaAlunos.appendChild(divCardAluno);

    //Limpar campo

    //campoNome = ""; Não pode ser Usado//
    campoNome.value = "";
    campoNome.focus();
}

function adicionarAlunosNoEnter(evento){
    if(evento.key === "Enter"){
        adicionarAluno();
        
    }
}