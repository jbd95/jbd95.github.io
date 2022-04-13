class Pixel {
    position;
    velocity;
    acceleration;
    color;
    lastPosition;
    updateThreshold = 1;
    resetPosition;
    resetVelocity;
    mass;
    lastRenderPosition;
    disabled = false;

    constructor(positionX, positionY, width, height, mass, color) {
        this.resetPosition = { x: positionX, y: positionY };
        this.resetVelocity = { x: 0, y: 0 };
        this.position = { x: positionX, y: positionY };
        this.lastPosition = { x: positionX - this.updateThreshold * 2, y: positionY - this.updateThreshold * 2 };        
        this.velocity = { x: 0, y: 0 };
        this.acceleration = { x: 0, y: 0 };
        this.width = width;
        this.height = height;
        this.color = color;
        this.mass = mass;
        this.lastRenderPosition = { x: 0, y: 0 }
    }

    getPosition() {
        return this.position;
    }

    getVelocity() {
        return this.velocity;
    }

    getAcceleration() {
        return this.acceleration;
    }
    
    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getMass() {
        return this.mass;
    }

    getColor() {
        return this.color;
    }

    isEnabled() {
        return !this.disabled;
    }

    render(canvasWrapper) {
        const roundedPositionForRender = {
            x: Math.round(this.position.x),
            y: Math.round(this.position.y)
        }
        canvasWrapper.drawPixel(roundedPositionForRender, this.width, this.height, this.color);
        this.lastPosition = { x: this.position.x, y: this.position.y };
        this.lastRenderPosition = { x: roundedPositionForRender.x, y: roundedPositionForRender.y }
    }

    hide(canvasWrapper) {
        canvasWrapper.clearRect(this.lastRenderPosition, this.width, this.height);
    }

    shouldRender(canvasWrapper) {
        if(this.disabled)
            return false;
        // do not render pixels outside of the canvas bounding box
        if(this.position.x > canvasWrapper.width || this.position.x < 0 ||
            this.position.y > canvasWrapper.height || this.position.y < 0 )
                return false;

        // render if the newest position has not been rendered yet
        if(Math.abs(this.lastPosition.x - this.position.x) > 0.01 ||
            Math.abs(this.lastPosition.y - this.position.y) > 0.01)
            return true;

        return Math.abs(this.velocity.x > 0) || Math.abs(this.velocity.y > 0)
            || Math.abs(this.acceleration.x) > 0  || Math.abs(this.acceleration.y) > 0
    }

    reset() {
        this.disabled = false;
        this.setPosition(this.resetPosition.x, this.resetPosition.y);
        this.setVelocity(this.resetVelocity.x, this.resetVelocity.y);
        this.setAcceleration(0, 0);
    }

    setDisabled() {
        this.disabled = true;
    }

    setVelocity(x, y) {
        this.velocity = { x, y };
    }

    setPosition(x, y) {
        this.position = { x, y };
    }

    setAcceleration(x, y) {
        this.acceleration = { x, y };
    }
}

export default Pixel;