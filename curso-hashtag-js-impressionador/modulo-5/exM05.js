// JavaScript Impressionador - Módulo 5 - Estruturas Condicionais e de Repetição

// Exercício 1: Verificação de Desconto:
// Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
// compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
// é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
// retorno e o valor da compra no console.
console.log("=============== resolução ex01===========================")

function verificaDesconto(valorCompra) {
    if (valorCompra >= 100) {
        console.log(`Parabéns! Você comprou ${valorCompra} reais e recebeu um desconto de 10%`)
        valorDoDesconto = (valorCompra / 100) * 10
        valorFinal = valorCompra - valorDoDesconto
        console.log(`Seu desconto foi de ${valorDoDesconto} e o valor a ser pago é de ${valorFinal}`)
    }
}


verificaDesconto(250)



// Exercício 2: Verificação de Produto em Estoque:
// Escreva um programa verificarEstoque que verifica se um produto está em estoque com base na quantidade
// disponível. Se a quantidade disponível for maior que zero, exiba "Produto disponível", caso contrário, exiba
// "Produto esgotado" no console
console.log("=============== resolução ex02===========================")

function verificaEstoque(produto) {
    if(produto > 0) {
        console.log(`O produto  está disponivel `)
    } else {
        console.log(`O produto  está indisponivel `)
    }
}
const quantidade = 0
verificaEstoque(quantidade)


// Exercício 3: Determinação de Categoria de Cliente:
// Escreva um programa categoriaCliente que determine a categoria de um cliente com base em sua
// pontuação de fidelidade, que será entre 0 e 100. Se a pontuação for maior ou igual a 85, o cliente é
// categorizado como "Cliente Premium". Se for maior ou igual a 50, é categorizado como "Cliente Regular".
// Caso contrário, é categorizado como "Cliente Comum".
console.log("=============== resolução ex03===========================")

function categoriaCliente(pontuacao) {
    if(pontuacao >= 85){
        console.log("cliente premium")
    }else if (pontuacao >= 50){
        console.log("cliente regular")
    }else {
        console.log("cliente comum")
    }
}

const pontuacao = 85
categoriaCliente(pontuacao)

