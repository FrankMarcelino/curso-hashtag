console.log('=================== Exercicio 3 ===============')

// // 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x"(sendo x o resultado do
//     cálculo).

const notas = []

function inserirNotas(n) {
    notas.push(n)
    console.log(notas)
}

function caulculaMedia() {

    let soma = 0
    let media = 0
   
    somaNotas()
    function somaNotas(){
        notas.forEach((nota)=> soma += nota)
    }

    mediaNotas()
    function mediaNotas() {
        if(notas.length === 3){
            media = soma / 3
            console.log(`a média desse aluno é ${media}`)
        }else {
            media = soma / 2
            console.log(`a média final desse aluno é ${media}`)
        }
    }
}

inserirNotas(4,5,6)


// //3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
// tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
// Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32


function converteParaFerenheit(t) {
    const fereheit = (9/5)*t+32
    console.log(fereheit)
}

converteParaFerenheit(34)

// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:
// O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).

function caulculaImposto(p) {
    const valorParaSerPago = p + (8.875/100)
    console.log(`O valor a ser pago é ${valorParaSerPago}`)
}

caulculaImposto(10)

