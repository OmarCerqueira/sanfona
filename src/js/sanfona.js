/*
OBJETIVO: Quando clicar na pergunta deve mostrar a resposta e trocar a seta fechada para aberta. Se tiver alguma resposta aberta deve fechar e abrir apenas a clicada.

- Pegar o elemento corresposndente ao click;
- Percorrer todos os elementos correspondentes;
- Adicionar uma escuta(evento) de click;
- Remover a classe que está atualmente aberta;
- Adicionar a classe aberta atual;
 */

const perguntasERespostas = document.querySelectorAll('.item');
// console.log(perguntasERespostas);

perguntasERespostas.forEach(item => {
    item.addEventListener('click', () =>{
        let abertoAtual = document.querySelector('.aberto');

        abertoAtual.classList.remove('aberto');
        item.classList.add('aberto');
    });
});