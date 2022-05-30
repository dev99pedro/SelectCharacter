const personagens = document.querySelectorAll(".personagem");
let selecionadoClass = ''
let playerSelecionando = 1
personagens.forEach((personagem) => {
  personagem.addEventListener('click', () => {
    if(playerSelecionando >= 3) {
      return
    }
    playerSelecionando++
  })

  personagem.addEventListener("mouseenter", () => {

    if(playerSelecionando === 3){
      return
    }

    if (playerSelecionando === 1) {
      selecionadoClass = 'selecionado'
    } else if (playerSelecionando === 2) {
      selecionadoClass = 'jogador-2-selecionado'
    }

    const idSelecionado = personagem.attributes.id.value;
    if (idSelecionado === 'ultron') return;


    const personagemAnterior = document.querySelector("." +selecionadoClass);
    personagemAnterior.classList.remove(selecionadoClass);

    personagem.classList.add(selecionadoClass);


    personagem.children[0].innerHTML = playerSelecionando + 'P'
    const imagemJogador1 = document.getElementById('personagem-jogador-' + playerSelecionando);
    imagemJogador1.src = `./src/body/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-' + playerSelecionando);
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerHTML = nomeSelecionado;
  });
});
