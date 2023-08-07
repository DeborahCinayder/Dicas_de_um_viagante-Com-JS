let text = document.getElementById('text');
let nuvemEsquerda = document.getElementById('nuvem-esquerda');
let nuvemDireita = document.getElementById('nuvem-direita');
let Balao = document.getElementById('balao');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    nuvemEsquerda.style.left = value * -1.8 + 'px';
    nuvemDireita.style.left = value * +1.8 + 'px';
    Balao.style.left = value * - 1 + 'px';


});