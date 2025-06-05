// Pega a imagem do cachorro
const cachorrocorrendo = document.querySelector('.cachorrocorrendo');
// Pega a imagem da cerca
const fence = document.querySelector('.fence');
// Pega o elemento que mostrará a pontuação
const scoreDisplay = document.getElementById('scoreValue');
// Pega a imagem do roblox
const roblox = document.querySelector('.roblox');
// Pega o botão de reiniciar
const restartbutton = document.getElementById("restartbutton");

//  permite que a musica seja controlada pelo js
const gameAudio = document.getElementById("gameAudio");

let currentScore = 0; // Pontuação atual
let scoreIntervalId;  // ID do intervalo de pontuação

// Função para atualizar a pontuação na tela
function updateScore() {
    currentScore++;
    scoreDisplay.textContent = String(currentScore).padStart(5, '0');
}

// Função para iniciar a contagem de pontos
function startScoring() {
    currentScore = 0;
    scoreDisplay.textContent = String(currentScore).padStart(5, '0');

    if (scoreIntervalId) {
        clearInterval(scoreIntervalId);
    }

    scoreIntervalId = setInterval(updateScore, 100);
}

// Função para pular
const jump = () => {
    cachorrocorrendo.classList.add('jump');
    setTimeout(() => {
        cachorrocorrendo.classList.remove('jump');
    }, 500);
}

// Loop principal do jogo
const loop = setInterval(() => {
    const fencePosition = fence.offsetLeft;
    const cachorrocorrendoPosition = +window.getComputedStyle(cachorrocorrendo).bottom.replace('px', '');

    // Verifica colisão
    if (fencePosition <= 80 && fencePosition > -50 && cachorrocorrendoPosition < 25) {
        fence.style.animation = 'none';
        fence.style.left = `${fencePosition}px`;

        cachorrocorrendo.style.animation = 'none';
        cachorrocorrendo.style.bottom = `${cachorrocorrendoPosition}px`;

        cachorrocorrendo.src = './images/cachorroparado(1).png';

        clearInterval(loop);
        clearInterval(scoreIntervalId);

        setTimeout(() => {
            gameOver();
        }, 100);
    }

    // Mostra o roblox se pontuação >= 200
    if (currentScore >= 200) {
        roblox.classList.remove('escondido');
    }

}, 10);

// Função chamada no fim do jogo
function gameOver() {
    clearInterval(loop);
    clearInterval(scoreIntervalId);

    // para a musica de fundo 
const bgm = document.getElementById('bgm');
bgm.pause();
bgm.currentTime = 0; //reinicia o tempo da musica, caso jogador reinicie

    restartbutton.style.display = "block";
    roblox.classList.remove("escondido");
}
 
// Quando uma tecla for pressionada, o cachorro pula
document.addEventListener('keydown', jump);

// Clique no botão de reinício
restartbutton.addEventListener("click", function () {
    location.reload();
});

// Inicia o jogo
startScoring();
