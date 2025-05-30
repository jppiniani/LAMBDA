/* pega a imagem do cachorro */
const cachorrocorrendo = document.querySelector('.cachorrocorrendo');
/* pega a imagem da cerca */
const fence = document.querySelector('.fence');



const jump = () => 
    {
        cachorrocorrendo.classList.add('jump'); /* adiciona a classe jump que contem a animação de pulo */
        setTimeout(() => 
        {
        cachorrocorrendo.classList.remove('jump'); /* remove a classe jump, para poder pular novamente */
        },500); /* após 500ms */
    }

    
    const loop = setInterval (() =>{
        
     const fencePosition = fence.offsetLeft; /*vai armazenar o deslocamento esquerdo da cerca, ques está diminuindo*/

    /*acessa o estilo que foi computado na imagem do cachorro pela propriedade bottom*/ 
    /*replace substitui o px por nada na string de saida*/ 
    /*+ converte para number*/
     const cachorrocorrendoPosition = +window.getComputedStyle(cachorrocorrendo).bottom.replace('px','');

     if(fencePosition <= 80 && fencePosition > -50 && cachorrocorrendoPosition < 25) 
        {
            fence.style.animation ='none'; /* cancela a animação da cerca */
            fence.style.left = `${fencePosition}px`; /*quando bater vai parar na posição*/

            cachorrocorrendo.style.animation ='none'; /* cancela a animação do cachorro */
            cachorrocorrendo.style.bottom = `${cachorrocorrendoPosition}px`; /*quando bater vai parar na posição*/

            cachorrocorrendo.src = './images/cachorroparado.gif' /*muda a imagem do cachorro correndo para cachorro parado*/
            clearInterval(loop); /*termina de rodar o loop*/
            
            setTimeout(() => {
                location.reload(); /* reinicia o jogo após 1 segundo */
            }, 1000);

        }

    },10); /*após 10ms*/

/* Quando alguma tecla for pressionada, a função jump será executada */
document.addEventListener('keydown', jump);
