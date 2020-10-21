function mousePressed() {
    for (let coords in posArray) {
        let x1 = posArray[coords][0][0];
        let x2 = posArray[coords][0][1];
        let y1 = posArray[coords][1][0];
        let y2 = posArray[coords][1][1];
        
        if (x1 <= mouseX && mouseX <= x2 && y1 <= mouseY && mouseY <= y2) {
            //spawn "X" or "O" at the middle of x1,y1 and x2, y2
            let midX = (x1 + x2) / 2;
            let midY = (y1 + y2) / 2;
            
            let type = onBoard.length % 2;

            onBoard.push(new Ox(type, midX, midY));
            board[coords[0]][coords[1]] = type;

            delete posArray[coords[0] + coords[1]];
            
            if (onBoard.length >= 5) {
                checkIfWon();
            }
        }
    }
};

function checkIfWon() {
    
    let sum;
    //Horizontal check
    for (let i = 0; i < 3; i++) {
        sum = board[i][0] + board[i][1] + board[i][2];
        if (sum == 0) {
            won = "x"
        } else if (sum == 3){
            won = "o"
        }
    }
    
    //Vertical check
    for (let i = 0; i < 3; i++) {
        sum = board[0][i] + board[1][i] + board[2][i];
        if (sum == 0) {
            won = "x"
        } else if (sum == 3){
            won = "o"
        }
    }
    
    //Diagonal 1 check
    sum = board[0][0] + board[1][1] + board[2][2];
    if (sum == 0) {
        won = "x"
    } else if (sum == 3){
        won = "o"
    }
        
    //Diagonal 2 check
    sum = board[0][2] + board[1][1] + board[2][0];
    if (sum == 0) {
    won = "x"
    } else if (sum == 3){
        won = "o"
    }
}