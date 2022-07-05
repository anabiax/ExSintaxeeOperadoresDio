/* Exercicio de sintaxe e operadores 

ATIVIDADE:
Crie uma função que recebe dois números como parâmetros;
Confira se os números são iguais;
Confira se a soma dos números é maior que 10 ou menor que 20;
Retorne uma string dizendo "Os números num1 e num2 não/são igual. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".    */

/* function compareNumeros(num1, num2){
    const saoIguais = num1 === num2;      //resultado booleano
    const soma = num1 + num2;

    if(saoIguais){
        return "São iguais";
    }
        return "Não são iguais";
} */


/* EXEMPLO DE USO DO IF TERNÁRIO

function compareNumeros(num1, num2){
    const saoIguais = num1 === num2;      //resultado booleano
    const soma = num1 + num2;

    return saoIguais ? "São iguais" : "Não são iguais";
} */

function compareNumeros(num1, num2){
    if(!num1 || !num2) return "Defina dois números!"
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

    function criaPrimeiraFrase(num1, num2){
        let saoIguais = "";                  // string auxiliar responsável por mudar o valor se forem ou não iguais
        // nessa variável "saoIguais" se os números forem iguais, ela valerá nada; se n forem partirá para o "não são iguais"
        
        if(num1 !== num2){     //ver se não são iguais primeiro
            saoIguais = "não";
        }

        return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
    }

    function criaSegundaFrase(num1, num2){
        const soma = num1 + num2;

        let resultado10 = "menor";
        let resultado20 = "menor";

        const compara10 = soma > 10;
        const compara20 = soma > 20;

        if(compara10){
            resultado10 = "maior";
        }

        if(compara20){
            resultado20 = "maior";
        }
        
        return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
    }

    console.log(compareNumeros(20, 20));   // imprimir no terminal dois números que não sejam zero para n devolver "NaN".