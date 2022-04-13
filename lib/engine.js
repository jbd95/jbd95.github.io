class Engine {
    animationFrameId;
    lastUpdateTime = undefined;
    physics;
    renderer;
    components;
    status;

    constructor(physics, renderer, components, status) {
        this.physics = physics;
        this.renderer = renderer;
        this.components = components;
        this.status = status;
    }

    start() {
        this.status.setEnabled();
        this.animationFrameId = requestAnimationFrame(this.update.bind(this));
    }

    stop() {
        this.status.setDisabled();
        cancelAnimationFrame(this.animationFrameId);
    }

    update(timestamp) {
        const deltaTime = this.getDeltaTime(timestamp);
        this.physics.update(deltaTime);
        this.renderer.update(deltaTime);
        this.animationFrameId = requestAnimationFrame(this.update.bind(this));
    }

    getDeltaTime(timestamp) {
        if(!this.lastUpdateTime) {
            this.lastUpdateTime = timestamp;
            return 0;
        }
        const deltaTime = timestamp - this.lastUpdateTime;
        this.lastUpdateTime = timestamp;
        return deltaTime / 1000;
    }

    reset() {
        this.physics.reset();
        this.renderer.reset();
    }

    isRunning() {
        return this.status.isRunning();
    }
}

export default Engine;