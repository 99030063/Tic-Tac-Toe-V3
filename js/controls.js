function mousePressed() {
    for (let coords in posArray) {
        x1 = posArray[coords][0][0]
        x2 = posArray[coords][0][1]
        y1 = posArray[coords][1][0]
        y2 = posArray[coords][1][1]
        
        if (x1 <= mouseX && mouseX <= x2 && y1 <= mouseY && mouseY <= y2) {
            midX = (x1 + x2) / 2
            midY = (y1 + y2) / 2
            
            type = onBoard.length % 2

            onBoard.push(new Ox(type, midX, midY));

            delete posArray[coords[0]+ coords[1]]
        }
    }
}