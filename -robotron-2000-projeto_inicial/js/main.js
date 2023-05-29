const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 32,
        "energia": -10,
        "velocidade": 5
    },
    "blindagem": {
        "forca": 10,
        "poder": 23,
        "energia": 1,
        "velocidade": 7
    },
    "nucleos": {
        "forca": 12,
        "poder": 41,
        "energia": 15,
        "velocidade": 27
    },
    "pernas": {
        "forca": 27,
        "poder": 12,
        "energia": -7,
        "velocidade": 3
    },
    "foguetes": {
        "forca": 30,
        "poder": 12,
        "energia": 13,
        "velocidade": 40
    }
}

controle.forEach( (elemento) => { // Loop que tem como parâmetro o elemento que a variável controle traz, que nesse caso são os elementos no HTML que têm a classe "controle-ajuste". 
    elemento.addEventListener('click', (evento) => { // Adicionando um evento de click para o parâmetro elemento, passando o parâmetro "evento" que traz o event de click que nesse caso é o PointerEvent
    
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) // Chama a função manipulaDados e pega o evento e o método target que traz o elemento HTML onde está sendo clicado pegando o texto através do textContent
        atualizaEstatisticas(evento.target.dataset.pecas)

    })
})


function manipulaDados(operacao, controle) { // Função criada que recebe dois parâmetros ["operacao", "controle"], "operacao" é a primeira coisa que retorna

    const peca = controle.querySelector('.controle-contador')
    
    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }

}

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca])

    estatisticas.forEach( (elemento) => {
        //console.log(elemento.dataset.estatistica)
        //console.log(elemento.textContent)

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

