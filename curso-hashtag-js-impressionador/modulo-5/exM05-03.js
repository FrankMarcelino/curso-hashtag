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

    if (dia >=  vendasDiarias.length) {
        return 0
    } 

    const valorVendaDiaAtual = vendasDiarias[dia] * hambuguerValor
    const valorDoProximoDia = calculaValorTotalVendas(vendasDiarias, hambuguerValor, dia + 1)

    return valorVendaDiaAtual + valorDoProximoDia
}

const totalVendasMes = calculaValorTotalVendas(vendasDiarias, hambuguerValor, 0)

console.log(totalVendasMes)

