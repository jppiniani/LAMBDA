// Pega a imagem do cachorro
const cachorrocorrendo = document.querySelector('.cachorrocorrendo');
// Pega a imagem da cerca
const fence = document.querySelector('.fence');
// Pega o elemento que mostrará a pontuação
const scoreDisplay = document.getElementById('scoreValue'); // Novo

const roblox = document.querySelector('.roblox')

let currentScore = 0; // Variável para guardar a pontuação atual
let scoreIntervalId;  // Variável para guardar o ID do intervalo da pontuação

// Função para atualizar a pontuação na tela
function updateScore() {
    currentScore++; // Incrementa a pontuação
    scoreDisplay.textContent = String(currentScore).padStart(5, '0'); // Mostra com 5 dígitos (ex: 00123)
}

// Função para iniciar a contagem de pontos
function startScoring() {
    currentScore = 0; // Reseta a pontuação
    scoreDisplay.textContent = String(currentScore).padStart(5, '0'); // Mostra pontuação inicial
    // Limpa qualquer intervalo anterior para evitar múltiplos contadores
    if (scoreIntervalId) {
        clearInterval(scoreIntervalId);
    }
    // Inicia um intervalo para chamar updateScore a cada 100ms (ajuste para velocidade desejada)
    scoreIntervalId = setInterval(updateScore, 100); 
}

const jump = () => {
    cachorrocorrendo.classList.add('jump');
    setTimeout(() => {
        cachorrocorrendo.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const fencePosition = fence.offsetLeft;
    const cachorrocorrendoPosition = +window.getComputedStyle(cachorrocorrendo).bottom.replace('px', '');

    if (fencePosition <= 80 && fencePosition > -50 && cachorrocorrendoPosition < 25) {
        fence.style.animation = 'none';
        fence.style.left = `${fencePosition}px`;

        cachorrocorrendo.style.animation = 'none';
        cachorrocorrendo.style.bottom = `${cachorrocorrendoPosition}px`;

        cachorrocorrendo.src = './images/cachorroparado(1).png';
        
        clearInterval(loop); // Para o loop principal do jogo
        clearInterval(scoreIntervalId); // PARA A CONTAGEM DE PONTOS (Novo)

        // Adiciona um pequeno delay antes de mostrar um alerta com a pontuação final
        setTimeout(() => {
            /*alert(`Fim de Jogo! Sua pontuação: ${currentScore}`);*/ // Mostra pontuação final
            location.reload(); // Reinicia o jogo após o alerta
        }, 100); // Pequeno delay para garantir que a última pontuação seja registrada visualmente

    }

    if(currentScore>=200){
        roblox.classList.remove('escondido');
    }

}, 10);

// Quando alguma tecla for pressionada, a função jump será executada
document.addEventListener('keydown', jump);

// Inicia a contagem de pontos quando o script é carregado (ou seja, quando o jogo começa)
startScoring(); // Novo