// JavaScript Impressionador - Módulo 5 - Estruturas Condicionais e de Repetição

// Exercícios

// RECURSIVIDADE:

// Exercício 1: Contagem de Itens do Cardápio (Recursivo)
// Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma
// função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete
console.log("=============== resolução ex01 ===========================")

const itensLachonete = ["hamburguer", "salada", "batata", "refrigerante", "sucos"]


function contaItensDiferentes(numeroIten) {
    if (numeroIten.length === 0) {
        return 0
    } else {
        itensLachonete.pop()
        return 1 + contaItensDiferentes(numeroIten)
    }
}

const totalItens = contaItensDiferentes(itensLachonete)

console.log(totalItens)

// Exercício 2: Cálculo do Valor Total das Vendas (Recursivo):
// Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
// um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
// mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.
console.log("=============== resolução ex02 ===========================")
const hambuguerValor = 10
const vendasDiarias = []

function simuladorVendas() {
    for (i = 0; i < 3; i++) {
        vendasDiarias.push(Math.round(Math.random() * 100))
    }
    console.log(vendasDiarias)
}

simuladorVendas()

function calculaValorTotalVendas(vendasDiarias, hambuguerValor, dia) {

    if (dia >= vendasDiarias.length) {
        return 0
    }

    const valorVendaDiaAtual = vendasDiarias[dia] * hambuguerValor
    const valorDoProximoDia = calculaValorTotalVendas(vendasDiarias, hambuguerValor, dia + 1)

    return valorVendaDiaAtual + valorDoProximoDia
}

const totalVendasMes = calculaValorTotalVendas(vendasDiarias, hambuguerValor, 0)

console.log(totalVendasMes)

// FOR IN:

// Exercício 3: Listagem de Itens do Cardápio:
// Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio
// são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços. Crie um
// programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços

console.log("=============== resolução ex03 ===========================")
const cardapioOnline = {
    hamburger: "16",
    batata: "7",
    suco: "6",
    refrigerante: "8",
}

for (info in cardapioOnline) {
    console.log(`${info} ---- R$${cardapioOnline[info]}`)
}


// Exercício 4: Calcular o Total da Conta:
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e
// quantidades) e calcule o valor total da conta
console.log("=============== resolução ex04 ===========================")



const comanda = {
    hambuguer: 16,
    batatas: 7,
    refrigerante: 4,
    sucos: 3,
}
let totalConta = 0

for (item in comanda) {
    totalConta += comanda[item]
}

console.log(`valor total da conta foi de R$ ${totalConta}`)

// FOR OF:

// Exercício 5: Listagem de Itens do Cardápio:
// Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use
// um loop for...of para listar todos os itens do cardápio.
console.log("=============== resolução ex05 ===========================")
const testeItensLachonete = ["hamburguer", "salada", "batata", "refrigerante", "sucos"]
for (nomeItens of testeItensLachonete) {
    console.log(nomeItens)
}

// Exercício 6: Calcular o Total da Conta
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
// item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o
// valor total da conta
console.log("=============== resolução ex06 ===========================")

const pedido = [
    {nome: 'hamburer', quantidade:2, valor: 32},
    {nome: 'suco', quantidade:2, valor: 14}
]


let totalConta6 = 0
for (i in pedido) {
    totalConta6 += pedido[i].valor
}

console.log(totalConta6)

