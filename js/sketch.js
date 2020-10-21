function setup() {
    createCanvas(420, 420);
}

function draw() {
    background(68, 55, 55)

    noStroke()
    fill(246, 233, 233)
    drawGrid()

    if (won == 'o') {
        posArray = {}
        textSize(30);
        text("'O' Won", 160, 370, 120, 60)
    } else if (won == 'x') {
        posArray = {};
        textSize(30);
        text("'X' Won", 160, 370, 120, 60)
    }

    for (let i = 0; i < onBoard.length; i++) {
        onBoard[i].show();
        
    }
}