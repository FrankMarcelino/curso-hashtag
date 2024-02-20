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

// Exercício 4: Entrega de Pedidos Pendentes:
//  Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
//  pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista
console.log("=============== resolução ex04 ===========================")

const pedidos = []

function addPedido(pedido, endereco)  {
    const novoPedido = {
        pedido: pedido,
        endereco: endereco
    }
    pedidos.push(novoPedido)

}

addPedido("hambuguer", "juazeiro")
addPedido("hambuguer", "crato")
addPedido("hambuguer", "barbalha")
let entregue = pedidos.length
let contagem = 1
function entregarPedidos(){
    while(entregue > 0) {
        console.log(`Entreguei o pedido ${contagem}`)
        contagem++
        entregue-- 
    }
}
entregarPedidos()

// Estrutura de Repetição - DO...WHILE:

// Exercício 5: Adivinhe o Número Secreto para Desconto:
// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
// para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
// tentem adivinhar o número secreto

console.log("=============== resolução ex05 ===========================")
const numeroSecreto = 10    

function chuteNumero(numero) {
    do {
        numero === numeroSecreto ? console.log("Você acertou!!") : console.log("você errou, tente mais uma vêz..")
    }while(numero === numeroSecreto)
}

chuteNumero(1)

// Exercício 6: Gerenciamento de Estoque de Itens em Falta:
// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
// permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
// processo
console.log("=============== resolução ex06 ===========================")

const intensLachonete = []
let encerrarPrograma = ""
function inserirItenFaltante(iten,comandoParaEncerrarPrograma) {
    do {
        intensLachonete.push(iten)
        encerrarPrograma = comandoParaEncerrarPrograma
    }while(encerrarPrograma === "sair")
    console.log(intensLachonete)
}

inserirItenFaltante('carne','continuar')