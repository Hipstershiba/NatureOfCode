class Brush {
    constructor(density, size) {
        this.density = density;
        this.size = size;
    }

    paint() {
        for (let i = 0; i < this.density; i++) {
            let x = randomGaussian(mouseX, this.size);
            let y = randomGaussian(mouseY, this.size);
            circle(x, y, map(dist(mouseX, mouseY, x, y), 0, this.size * 2, 3, 0));
        }
    }
}