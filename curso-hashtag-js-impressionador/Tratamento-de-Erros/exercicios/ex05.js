// Exercício 5: Tratamento de Erro ===> em Conversão de Tipos:

// Crie um código JavaScript que inclua uma função chamada tratarErroConversaoTipo(). Dentro dessa função,
// siga estas etapas:

// Declare uma variável chamada numero e atribua a ela uma string que não represente um número válido, por
// exemplo, "Hashtag". Tente converter a variável numero para um número inteiro usando a função parseInt().
// Após a conversão, verifique se o resultado é NaN (não é um número) usando isNaN(). Se o resultado for NaN,
// lance um erro intencionalmente usando throw new Error(). Este erro deve indicar que não foi possível
// converter a string em número. Utilize um bloco try...catch para lidar com o erro que ocorre ao tentar converter
// a string em um número. No bloco catch, exiba a mensagem de erro capturada no console usando
// console.error()

let numero = "Hashtag";
function tratarErroConversaoTipo() {
    try {
        const numero = parseInt("Hashtag");
        if (isNaN(numero)) {
            throw new Error("Ocorreu um erro ao tentar converter uma string em um número");
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar converter uma string em um número: " + error);
    }
}

tratarErroConversaoTipo()