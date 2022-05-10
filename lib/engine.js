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

        document.addEventListener("visibilitychange", this.onWindowVisibilityChange.bind(this));
    }

    // disable engine when tab is not focused to save computer resources
    onWindowVisibilityChange() {
        if(document.visibilityState === "hidden") {
            this.disable();
            this.status.setDisabledForPerformance(true);
        }
        else {
            if(this.status.isDisabledForPerformance()) {
                this.status.setDisabledForPerformance(false);
            }

            if(this.status.isEnabled()) {
                this.enable();
            }
        }
    }

    start() {
        this.status.setEnabled();
        this.enable();
    }

    stop() {
        this.status.setDisabled();
        this.disable();
    }

    enable() {
        this.lastUpdateTime = undefined;
        this.animationFrameId = requestAnimationFrame(this.update.bind(this));
    }

    disable() {
        this.lastUpdateTime = undefined;
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