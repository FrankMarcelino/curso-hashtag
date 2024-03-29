// Exercício 2: Exercício: Tratamento de Erro em ===> Chamada de Função Inexistente:

// Crie um código JavaScript que inclua uma função chamada tratarErroFuncaoInexistente(). Dentro dessa
// função, siga estas etapas:

// Utilize um bloco try...catch para lidar com o erro que ocorre ao tentar chamar uma função funcaoInexistente()
// que não está definida. Dentro do bloco try, tente chamar a função funcaoInexistente(). No bloco catch, exiba
// uma mensagem de erro personalizada usando console.error(). Esta mensagem deve informar que ocorreu um
// erro ao tentar chamar uma função que não está definida e incluir o erro capturado na mensagem de erro

function tratarErroFuncaoInexistente() {
    try {
        funcaoInexistente();
    }catch (error) {
        console.error("Ocorreu um erro ao tentar chamar uma função que não existe: " + error);
    }
}

// function funcaoInexistente() {
//     console.log("Função inexistente");
// }

tratarErroFuncaoInexistente()