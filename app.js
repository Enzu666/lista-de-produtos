'use strict'

import produtos from "./produtos.js" 

const coresPorCategoria = {
    "Informática": "#1a73e8",
    "Eletrônicos": "#ff6d00",
    "Celulares": "#00c853",
    "Games": "#aa00ff",
}
function gerarEstrelas(classificacao){
    const estrelaCheia = '⭐'
    const estrelasVazia = '☆'
    return estrelaCheia.repeat(classificacao) + estrelasVazia.repeat(5 - classificacao)
}

function criarCard(produto){
    const card = document.createElement('div')
    card.className = 'card'

    const corCategoria = document.createElement('div')
    corCategoria.id = 'corCategoria'
    corCategoria.style.backgroundColor = coresPorCategoria[produto.categoria] ?? "#ccc"

    const img = document.createElement('img')
    img.src = `./img/${produto.imagem}`
    img.alt = produto.nome

    const nome = document.createElement('h3')
    nome.textContent = produto.nome

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const preco = document.createElement('h2')
    preco.textContent = `R$ ${produto.preco}`

    const classificacao = document.createElement('p')
    classificacao.textContent = gerarEstrelas(produto.classificacao)    

    const botao = document.createElement('div')
    botao.id = 'botao'
    botao.innerHTML = '<h3>comprar</h3>'

    card.appendChild(corCategoria)
    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(descricao)
    card.appendChild(preco)
    card.appendChild(classificacao)
    card.appendChild(botao)

    return card
}


const cards = produtos.map(criarCard)

const container = document.getElementById('container')
container.innerHTML = ''
cards.forEach(card => container.appendChild(card))

console.log(produtos)