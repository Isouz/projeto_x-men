const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        removerSelecao()

        personagem.classList.add('selecionado')
        
        alterarPersonagemSelecionado(personagem)

        altNomeSelecionado(personagem)

        altDescricao(personagem)
    })
})

function altDescricao(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem")
    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function altNomeSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `src/imagens/card-${idPersonagem}.png`
}

function removerSelecao() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}
