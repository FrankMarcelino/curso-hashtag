
// -Crie uma variável com o valor inicial igual a 2148. Esse valor não deve ser alterado.
console.log('=================== Resultado do Passo 1 ===============')
const numero2148 = 2148
console.log(numero2148)

// -Crie uma segunda variável, dessa vez sem um valor inicial.
console.log('=================== Resultado do Passo 2 ===============')
let semValor = undefined
console.log(semValor)

// -Imprima na tela a seguinte mensagem: "O valor da primeira variável é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável.
console.log('=================== Resultado do Passo 3 ===============')
console.log(`O valor da primeira variável é ${numero2148}`)

// -Atribua um valor numérico à segunda variável.
console.log('=================== Resultado do Passo 4 ===============')
semValor = 3
console.log(typeof(semValor))

// -Imprima na tela os textos "Minha segunda variável vale $valor" e "o valor da soma das minhas duas variáveis é $valor", substituindo o termo $valor pelos valores correspondentes.
console.log('=================== Resultado do Passo 5 ===============')
const soma = semValor + numero2148
console.log(`Minha segunda variável vale ${semValor} o valor da soma das minhas duas variáveis é ${soma}`)

// -Eleve a sua segunda variável ao quadrado e imprima esse resultado na tela. Após isso, divida esse resultado por 3 e coloque-o na tela novamente.
console.log('=================== Resultado do Passo 6 ===============')

semValor = semValor**2
console.log(semValor)
semValor = semValor/3
console.log(semValor)