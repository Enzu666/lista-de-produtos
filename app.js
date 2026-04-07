'use strict'

import produtos from "./produtos.js" with {type: "json"}

function criarCard(produto){
    const card = document.createElement('div')
    card.className = 'card'

    const corCategoria = documento.createElement('categoria')
    corCategoria.textContent = produto.corCategoria
}

const cards = produtos.map(criarCard)

console.log(produtos)