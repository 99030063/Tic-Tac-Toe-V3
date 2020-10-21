class Ox {
    constructor(type, x, y) {
        this.x = x;
        this.y = y;
        this.type = type; //what to spawn
        this.alpha = 0
    }

    show() {
        push()
        translate(this.x, this.y);

        if (this.type == 0) {
            
            rotate(PI / 4)

            if (this.alpha != 255) {
                this.alpha += 25;
                fill(255, 128, 51, this.alpha)
            } 
            rect(-30, -4, 60, 8)
            rect(-4, -30, 8, 60) 
        } else if (this.type == 1) {

            if (this.alpha != 255) {
                this.alpha += 25;
                fill(255, 77, 77, this.alpha)
            } 
            circle(0, 0, 60);
            fill(68, 55, 55);
            circle(0, 0, 45);
        }
        pop()
    }
}