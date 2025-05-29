const cachorrocorrendo = document.querySelector('.cachorrocorrendo');
const fence = document.querySelector('.fence');



const jump = () => 
    {
        cachorrocorrendo.classList.add('jump');
        setTimeout(() => 
        {
        cachorrocorrendo.classList.remove('jump');
        },500); 
    }

    
    const loop = setInterval (() =>{
        
     const fencePosition = fence.offsetLeft;
     const cachorrocorrendoPosition = +window.getComputedStyle(cachorrocorrendo).bottom.replace('px','');

     if(fencePosition <= 80 && fencePosition > 0 && cachorrocorrendoPosition < 25) 
        {
            fence.style.animation ='none';
            fence.style.left = '${fencePosition}px';

             cachorrocorrendo.style.animation ='none';
            cachorrocorrendo.style.bottom = '${cachorrocorrendoPosition}px';

            cachorrocorrendo.src = './images/cachorroparado.gif'
            clearInterval(loop);
           
        }

    },10);

document.addEventListener('keydown', jump);