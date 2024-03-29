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
        let chance = random(1);
        if (chance > 0.5) {
            this.mouseChase();
        } else {
            this.x += floor(random(3)) - 1;
            this.y += floor(random(3)) - 1;
        }
    }

    mouseChase() {
        if (mouseX > this.x) {
            this.x += 1;
        } else {
            this.x -= 1;
        }
        if (mouseY > this.y) {
            this.y += 1;
        } else {
            this.y -= 1;
        }
    }
}