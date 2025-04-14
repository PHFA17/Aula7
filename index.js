let saldo = 0
let tentativas = 0
let numeroAleatorio
const mensagemGameOver = document.getElementById("mensagemGameOver")
const mensagemGanhou = document.getElementById("mensagemGanhou")
const mensagemPerdeu = document.getElementById("mensagemPerdeu")

comecarNovoJogo();

function comecarNovoJogo() {
    mensagemGameOver.innerHTML = ""
    mensagemPerdeu.innerHTML = ""
    mensagemGanhou.innerHTML = ""
    numeroAleatorio = Math.floor(Math.random() * 10)
    console.log(numeroAleatorio);
    saldo += 1000;
    tentativas = 3;
    
}

function verifPalpite() {
    let palpite = Number(document.getElementById("inputPalpite").value)
    if(palpite === numeroAleatorio){
        saldo = saldo * 2
        mensagemGanhou.innerHTML = "Parabéns, você acertou"
        const gameWin = new Audio('gameWin.mp3')
        gameWin.play();
    }else if(tentativas > 1){
        tentativas --
        saldo -= 333.33
        mensagemPerdeu.innerHTML = "Você perdeu"
    }else{
        mensagemGameOver.innerHTML = "Game Over"
        const gameOverSfx = new Audio('gameOverSfx.mp3')
        gameOverSfx.play();
        
    }
}


