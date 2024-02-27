// Exercício 6: Tratamento de Erro ====> em Divisão por Zero:

// Crie um código JavaScript que inclua uma função chamada tratarErroDivisaoPorZero(). Dentro dessa função,
// siga estas etapas:

// Declare duas variáveis chamadas dividendo e divisor e atribua a elas valores numéricos. Verifique se o valor da
// variável divisor é igual a zero. Se o divisor for igual a zero, lance um erro intencionalmente usando throw new
// Error(). Este erro deve indicar que a divisão por zero não é permitida. Utilize um bloco try...catch para lidar
// com o erro que ocorre ao tentar realizar uma divisão por zero. No bloco catch, exiba a mensagem de erro
// capturada no console usando console.error()

let dividendo = 10;
let divisor = 0;
function tratarErroDivisaoPorZero() {
    try {
        const resultado = dividendo / divisor;
        if (divisor === 0) {
            throw new Error("A divisão por zero não pode ser permitida");
        }
        console.log("O resultado da divisão e: " + resultado);
    } catch (error) {
        console.error("Ocorreu um erro ao tentar realizar uma divisão por zero: " + error);
    }
}
