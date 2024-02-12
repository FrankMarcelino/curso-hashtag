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



// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:
