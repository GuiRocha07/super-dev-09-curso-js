/*1. Criar uma função exercicio01CompararDoisNumeros
   No HTML criar:
   - um campo para digitar o primeiro número
   - um campo para digitar o segundo número
   - um botão para executar a função

   O que a função deve fazer:
   - pegar os dois números digitados
   - verificar qual deles é o maior
   - informar também se os dois números são iguais
   - mostrar o resultado em uma mensagem
   - validar se os dois campos foram preenchidos corretamente
*/

function exercicio01CompararDoisNumeros(){
    const campoNumero = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero.value);

    const campoNumero = document.getElementById("numero2");
    const numero2 = parseInt(campoNumero.value);

    const resultadoDiv = document.getElementById('resultado');


}







/*function verificarPar(){
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
}*/