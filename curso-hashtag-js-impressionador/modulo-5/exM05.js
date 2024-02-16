// JavaScript Impressionador - Módulo 5 - Estruturas Condicionais e de Repetição

// Exercício 1: Verificação de Desconto:
// Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
// compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
// é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
// retorno e o valor da compra no console.
console.log("=============== resolução ex01 ===========================")

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
console.log("=============== resolução ex02 ===========================")

function verificaEstoque(produto) {
    if (produto > 0) {
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
console.log("=============== resolução ex03 ===========================")

function categoriaCliente(pontuacao) {
    if (pontuacao >= 85) {
        console.log("cliente premium")
    } else if (pontuacao >= 50) {
        console.log("cliente regular")
    } else {
        console.log("cliente comum")
    }
}

const pontuacao = 85
categoriaCliente(pontuacao)

// Exercício 4: Classificação de Desempenho de Vendas:
// Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
// base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
// desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
// percentual alcançado em relação à meta. As categorias incluem "Excelente Desempenho" (para vendedores
// que alcançaram ou excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
// 99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), "Desempenho
// Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e "Desempenho Insatisfatório" (para
// vendedores com vendas abaixo de 60% da meta). Execute o código e informe a categoria de desempenho do
// vendedor com base nas vendas mensais e na meta de vendas estabelecida.

console.log("=============== resolução ex04 ===========================")

let meta = 0
function desempenhoIndividualDeVenda(meta) {
    if (meta > 100) {
        console.log("Excelente Desempenho")
    } else if (meta >= 90) {
        console.log("Muito Bom Desempenho")
    } else if (meta >= 80) {
        console.log("Bom Desempenho")
    } else if (meta >= 61) {
        console.log("Desempenho Satisfatório")
    } else {
        console.log("Desempenho Insatisfatório")
    }
}

function calculaMeta(metaVendas, vendeu) {
    meta = (vendeu / metaVendas) * 100
    console.log(`${meta}%`)
}

calculaMeta(1000, 90)
desempenhoIndividualDeVenda(meta)

// Exercício 5: Verificação de Velocidade:
// Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo como argumento e
// retorna true se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso
// contrário, utilizando o operador ternário.

console.log("=============== resolução ex05 ===========================")
function verificarVelocidade(velocidade) {
    const dentroDoLimite = velocidade <= 80 ?  "dentro do limte" : "acima do limte"
    console.log(dentroDoLimite) 
}

verificarVelocidade(100)

// Exercício 6: Semáforo de Trânsito:
// Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
// "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
// do semáforo. Utilize o operador ternário para determinar a mensagem.
console.log("=============== resolução ex06 ===========================")

function mensagemSemaforo(cor) {
    const mensagem =  cor === "vermelho" ? "pare" : cor === "amarelo" ? "atenção" : "siga"
    console.log(mensagem)
}

mensagemSemaforo("verde")
