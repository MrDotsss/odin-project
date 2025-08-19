const choices = ['Rock', "Paper", "Scissors"]

const roundCountText = document.querySelector('.round-count')
const playerScoreText = document.querySelector('.player-score')
const cpuScoreText = document.querySelector('.cpu-score')
const playerChoiceText = document.querySelector('.player-choice')
const cpuChoiceText = document.querySelector('.cpu-choice')
const resultText = document.querySelector('.result')

const choiceButtons = document.querySelectorAll('.choice-play')

const canvas = document.querySelector('#confetti')
const jsConfetti = new JSConfetti(canvas)


let roundCount = 0
let playerScore = 0
let cpuScore = 0

let playerCurrentChoice = ''
let cpuCurrentChoice = ''

let finished = false

choiceButtons.forEach(element => {
    element.addEventListener('click', playGame)
});

async function playGame(event) {
    if (finished) return

    roundCount++

    playerCurrentChoice = event.target.textContent
    const randomCpu = Math.floor(Math.random() * choices.length)
    cpuCurrentChoice = choices[randomCpu]
    SetScore()
    applyUI()

    if (playerScore != cpuScore && (playerScore == 5 || cpuScore == 5)) {
        finished = true
        resultText.textContent = playerScore > cpuScore ? "Player Won!" : "Cpu Won!"
        await jsConfetti.addConfetti({
            emojis: ['✋', '✊', '✌', '🌟', '✨']
        })
        playerScore = 0
        cpuScore = 0
        roundCount = 0
        resultText.textContent = "Play!"
        finished = false
    }
}

function applyUI() {
    roundCountText.textContent = roundCount
    playerScoreText.textContent = playerScore
    cpuScoreText.textContent = cpuScore
    playerChoiceText.textContent = playerCurrentChoice
    cpuChoiceText.textContent = cpuCurrentChoice
}

function SetScore() {
    if (playerCurrentChoice != '') {
        switch (playerCurrentChoice) {
            case cpuCurrentChoice:
                break;
            case 'Rock':
                cpuCurrentChoice == 'Scissors' ? playerScore++ : cpuScore++;
                break;
            case 'Paper':
                cpuCurrentChoice == 'Rock' ? playerScore++ : cpuScore++;
               break;
            case 'Scissors':
                cpuCurrentChoice == 'Paper' ? playerScore++ : cpuScore++;
                break;
        }
    }
}