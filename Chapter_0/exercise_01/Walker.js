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
        this.x += floor(random(4)) - 1;
        this.y += floor(random(2)) - 1;
    }
}