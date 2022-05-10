class Renderer {
    canvasWrapper;
    components;

    constructor(canvasWrapper, components) {
        this.canvasWrapper = canvasWrapper;
        this.components = components;
    }

    update(deltaTime) {
        const enabledComponents = this.components.getEnabled();
        if(enabledComponents.some(c => c.shouldRender(this.canvasWrapper))) {
            this.canvasWrapper.clear();
            enabledComponents.forEach(c => c.render(this.canvasWrapper));
        }
    }

    reset() {
        this.canvasWrapper.clear();
        this.components.getAll().forEach(c => c.render(this.canvasWrapper))
    }
}

export default Renderer;