
const botaoCliqueAqui  = document.querySelector('#button')

function alertaDoBotao() {
    alert('Botão Clicado!')
}

botaoCliqueAqui.addEventListener('click',alertaDoBotao)

const inputFocus = document.querySelector('#input')

inputFocus.addEventListener("focus", function() {
    inputFocus.value =  "Campo em foco"
});

// Evento de desfoco
inputFocus.addEventListener("blur", function() {
    inputFocus.value = ""
});

const imgMisteriossa = document.querySelector("#img-misteriosa")

function revelaImagem() {
    imgMisteriossa.setAttribute('src','img2.jpg')
  }

  // Função que muda a cor para vermelho
  function ocutaImagemMisteriosa() {
    imgMisteriossa.setAttribute('src','imagem1.png')
  }

