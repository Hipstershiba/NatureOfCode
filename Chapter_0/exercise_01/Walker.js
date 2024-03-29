class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(256);
        strokeWeight(5);
        point(this.x, this.y);
    }

    step() {
        let choice = floor(random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
    }
}