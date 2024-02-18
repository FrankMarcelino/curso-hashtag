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
const pratos = ["hamburguer", "batata", "sorvete", "suco", "refrigerante"]
const valores = [16, 5, 7, 8,6 ]

function cardapioDigital(pratos, valores) {
    for (i = 0; i < pratos.length; i++){
        console.log(`${pratos[i]} R$ ${valores[i]}`)
    }
}

cardapioDigital(pratos, valores)