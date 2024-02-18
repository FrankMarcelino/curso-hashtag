// JavaScript Impressionador - Módulo 5 - Estruturas Condicionais e de Repetição

// Exercícios

// Estrutura de Repetição - FOR:

// Exercício 1: Cálculo do Faturamento Semanal:
// Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
// semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
// semana. Crie um programa que calcule o valor total das vendas em uma semana.
console.log("=============== resolução ex01 ===========================")

const valorHamburguer = 10
const hamburguerVendidos = [3, 4, 5, 7, 8, 5, 10]
let hamburgeresVendidosNaSemana = 0
let valorTotalVendas = 0

function valorTotalHamburgeres() {
    for (i = 0; i < hamburguerVendidos.length; i++) {
        hamburgeresVendidosNaSemana = hamburgeresVendidosNaSemana + hamburguerVendidos[i]
    }
    valorTotalVendas = hamburgeresVendidosNaSemana * valorHamburguer
    console.log(`O valor total das vendas foi igual: ${valorTotalVendas} reais`)
}

valorTotalHamburgeres()

// Exercício 2: Listagem do Cardápio Digital:
// Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio
// juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo
console.log("=============== resolução ex02 ===========================")

const cardapio = [
    { nome: "hamburguer", valor: 16 },
    { nome: "batata", valor: 5 },
    { nome: "sorvete", valor: 7 },
    { nome: "suco", valor: 8 },
    { nome: "refrigerante", valor: 6 }

]

function cardapioDigital(cardapio) {
    for (i = 0; i < cardapio.length; i++) {
        console.log(`${cardapio[i].nome} R$ ${cardapio[i].valor}`)
    }
}

cardapioDigital(cardapio)

// Estrutura de Repetição - WHILE:

// Exercício 3: Contagem de Dinheiro no Caixa:

// Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
// feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
// lanchonete
console.log("=============== resolução ex03 ===========================")

let caixa = []
function fechaCaixa() {
    let fechamentoCaixa = 0
    let movimentoCaixa = 0
    while(movimentoCaixa < caixa.length){
        fechamentoCaixa = fechamentoCaixa + caixa[movimentoCaixa]
        movimentoCaixa++
    }
    console.log(`valor no caixa ${fechamentoCaixa}`)
}


function movimentoCaixa(valor) {
    caixa.push(valor)
}

movimentoCaixa(1)
movimentoCaixa(3)
movimentoCaixa(4)
movimentoCaixa(5)
fechaCaixa()



