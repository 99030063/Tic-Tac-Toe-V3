function setup() {
    createCanvas(420, 420);
}

function draw() {
    background(68, 55, 55)

    noStroke()
    fill(246, 233, 233)
    drawGrid()

    for (let i = 0; i < onBoard.length; i++) {
        onBoard[i].show();
        
    }
}