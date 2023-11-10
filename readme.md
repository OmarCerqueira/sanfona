# FAQ de Efeito Sanfona
Construção de página FAQ (perguntas frequentes) com efeito sanfona.

## Desafio

Os usuários precisam:

- Clicar nas perguntas e visualizar a apresentação das respostas no efeito sanfona.
- Observar efeitos de mudança na seta indicando que a resposta está visível.

## Captura de tela em uso

[<img src='./src/images/sanfona.gif' alt='Gif da Tela do FAQ - Sanfona'>](https://omarcerqueira.github.io/sanfona/)

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

### Desenvolvimento

- Marcação e semântica de HTML
- Propriedades customizadas de CSS
- Flexbox
- Lógica de Programação
- Manipulaçao de DOM.

### Aprendizado

Projeto que exigiu a prática de técnicas e ferramentas HTML e CSS que foram fundamentais para o desenvolvimento do projeto. Foi necessário aperfeiçoar cada vez mais o flexbox e o position para alcançar o objetivo desejado. A lógica de programação, juntamente com as ferramentas de linguagem JS, como métodos e eventos, foram agregadas de forma ímpar ao conhecimento em geral. O que gerou um aprendizado de grande valor da linguagem.

### Como Utilizar

- Passe o mouse sobre as perguntas e perceba que é um objeto de interação.
- Clique nas perguntas para ver o efeito sanfona acontecer e mostrar as respostas.

    - Trechos de código:

```html
<img src="./src/images/homem.png" alt="Boneco Usando um VR" class="imagem">
```
```html
<h3 class="pergunta">Posso saber o que meu cliente está vendo enquanto usa o HMD?
                        </h3>
```
```css
.itens .item .resposta {
    font-size: 15px;
    font-weight: 300;
    line-height: 17px;
    margin-bottom: 15px;
    display: none;
```
```css
.conteudo .itens .item {
    /* background-color: papayawhip; */
    background-image: url(../images/seta-fechada.png);
    background-repeat: no-repeat;
    background-position: right 2px top 2px;
    background-size: 15px;
    border-bottom: solid 1px gray;
    margin-bottom: 15px;
    
}
```
```JavaScript
     let abertoAtual = document.querySelector('.aberto');

        abertoAtual.classList.remove('aberto');
        item.classList.add('aberto'
```
## Autor

- LinkedIn - [Omar Cerqueira](https://www.linkedin.com/in/omar-cerqueira-b83317226/)
- Github - [OmarCerqueira](https://github.com/OmarCerqueira)
- WhatsApp - 71 98201-1524

## Agradecimentos

Gratidão eterna ao pessoal do Dev em Dobro por me acompanhar nessa incrível jornada do mundo da tecnologia.

- Site - [Dev Quest](https://devemdobro.com)
- LinkedIn - [Dev em Dobro](https://www.linkedin.com/company/dev-em-dobro/)
- Discord - [Guilda Dev em Dobro](https://discord.com/channels/821364094878613524/821364094878613528)
- Github - [devemdobro](https://github.com/devemdobro)