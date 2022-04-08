class Pixel {
    position;
    color;

    constructor(positionX, positionY, width, height, color) {
        this.position = { x: positionX, y: positionY };
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getPosition() {
        return this.position;
    }
    
    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getColor() {
        return this.color;
    }
}

export default Pixel;