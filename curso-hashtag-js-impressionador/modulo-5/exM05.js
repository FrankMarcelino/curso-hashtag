// JavaScript Impressionador - Módulo 5 - Estruturas Condicionais e de Repetição

// Exercício 1: Verificação de Desconto
// Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
// compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
// é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
// retorno e o valor da compra no console.


function verificaDesconto(valorCompra){
    if(valorCompra  >= 100) {
        console.log(`Parabéns! Você comprou ${valorCompra} reais e recebeu um desconto de 10%`)
        valorDoDesconto = (valorCompra / 100) * 10
        valorFinal = valorCompra - valorDoDesconto
        console.log(`Seu desconto foi de ${valorDoDesconto} e o valor a ser pago é de ${valorFinal}`)
    }
}


verificaDesconto(250)