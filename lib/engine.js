class Engine {
    animationFrameId;
    lastUpdateTime = undefined;
    physics;
    renderer;
    status;

    constructor(physics, renderer, status) {
        this.physics = physics;
        this.renderer = renderer;
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

    addComponent(component) {
        this.physics.addComponent(component);
        this.renderer.addComponent(component);
        return this;
    }

    addComponents(components) {
        this.physics.addComponents(components);
        this.renderer.addComponents(components);
        return this;
    }

    isRunning() {
        return this.status.isRunning();
    }
}

export default Engine;