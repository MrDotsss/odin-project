const container = document.querySelector('.grid-container');
const clearButton = document.querySelector('.menu-clear').addEventListener('click', clearGrid);
const sizeButton = document.querySelector('.menu-size').addEventListener('click', setSize);
const blackButton = document.querySelector('.menu-black').addEventListener('click', switchPen);
const randomButton = document.querySelector('.menu-random').addEventListener('click', switchPen);
const eraserButton = document.querySelector('.menu-eraser').addEventListener('click', switchPen);
const currentPenDiv = document.querySelector('.current-pen')


const PENMODE = {
    BLACK: 'black',
    RANDOM: 'random',
    ERASER: 'white',
}

let currentPen = PENMODE.BLACK;
let gridSize = 16

function generateGrid() {
    container.innerHTML = '';
    const totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square-grid');
        square.style.opacity = 0.1
        square.style.flex = `1 0 ${100 / gridSize}%`;
        square.addEventListener('mouseenter', onHover)
        container.appendChild(square);
    }
}

generateGrid()

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
}

function onHover(event) {
    const penColor = currentPen == 'random' ? getRandomColor() : currentPen
    event.target.style.backgroundColor = penColor;
    
    currentPenDiv.style.backgroundColor = penColor

    if (currentPen == 'random' || currentPen == 'black') {
        let currentOpacity = parseFloat(event.target.style.opacity)
        if (currentOpacity < 1) {
            currentOpacity += 0.1
            event.target.style.opacity = currentOpacity

        }
    } else {
        event.target.style.opacity = 0.1
    }


}

function setSize(event) {
    let newCell = prompt("Enter cell size", gridSize)
    if (newCell > 100 || newCell < 0 || newCell == null) {
        alert("Cell Size should not exceed 100")
        return
    }
    gridSize = newCell
    generateGrid()
}

function clearGrid() {
    const squares = document.querySelectorAll('.square-grid')
    squares.forEach(element => {
        element.style.opacity = 0.1
        element.style.backgroundColor = "white"
    });
}

function switchPen(event) {
    console.log(event.target.className)
    if (event.target.className == 'menu-black') {
        currentPenDiv.style.backgroundColor = 'black'
        currentPen = PENMODE.BLACK
    } else if (event.target.className == 'menu-random') {
        currentPen = PENMODE.RANDOM
    }
    else if (event.target.className == 'menu-eraser') {
        currentPenDiv.style.backgroundColor = 'white'
        currentPen = PENMODE.ERASER
    }
    else {
        currentPen = PENMODE.BLACK
    }
}
