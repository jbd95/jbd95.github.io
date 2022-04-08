class Engine {
    animationFrameId;
    running = false;
    components = [];

    start() {
        this.running = true;
        this.animationFrameId = requestAnimationFrame(this.update.bind(this));
    }

    stop() {
        this.running = false;
        cancelAnimationFrame(this.animationFrameId);
    }

    update() {
        this.components.forEach(c => c.update());
        this.animationFrameId = requestAnimationFrame(this.update.bind(this));
    }

    addObject(component) {
        this.components.push(component);
        return this;
    }

    isRunning() {
        return this.running;
    }
}

export default Engine;