console.log('=================== Exercicio 2 ===============')

// ### 1 - Escreva um programa executando os seguintes passos:
// -Crie uma variável com o valor inicial igual a uma lista de número de 1 a 5. Esse valor não deve ser alterado.
const listaNumeros = [1, 2, 3, 4, 5]

// -Imprima na tela: A primeira variável
console.log(listaNumeros)

// -Imprima na tela a seguinte mensagem: "O valor do elemento X da minha lista é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável. X é a posição do elemento na lista.
console.log(`O valor do elemento 0 da minha lista é ${listaNumeros[0]}`)

// ### 2 - Escreva um programa executandos os próximos passos:    
// -Crie uma variável com valor inicial de um objeto que represente um pokemon (nome, estamina, defesa, ataque, habilidade).

let pokemon = {
    nome: "Pikachu",
    estamina:"20",
    defesa:10,
    ataque:15,
    habilidade:30,
}

// -Imprima na tela os textos "Meu objeto pokemon possui "chave" e $valor", substituindo os termos com $ pelos valores correspondentes ao conjunto chave/valor.

console.log(`Meu objeto pokemon possui "defesa" e ${pokemon.defesa}`)

// ### 3 - Crie duas variáveis do tipo Number de valores iniciais distintos. Imprima na tela o resultado das operações aritméticas entre elas(+, -, /, *).

const numero1 = 2
const numero2 = 3
console.log(`a soma entre variaveis é: ${numero1 + numero2}`)
console.log(`a subtração entre variaveis é: ${numero1 - numero2}`)
console.log(`a divisao entre variaveis é: ${numero1 / numero2}`)
console.log(`a Multiplicaçao entre variaveis é: ${numero1 * numero2}`)


// ### 4 - Depois disso. Imprima na tela o resultado das operações de comparação maior que (>), menor que(<) e igual(===) para as duas variáveis.

    console.log(`O numero ${numero1} é maior que o numero ${numero2} = ${numero1 > numero2}`)
    console.log(`O numero ${numero1} é menor que o numero ${numero2} = ${numero1 < numero2}`)
    console.log(`O numero ${numero1} é igual que o numero ${numero2} = ${numero1 === numero2}`)
