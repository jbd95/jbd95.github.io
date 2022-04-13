class Renderer {
    canvasWrapper;
    components;

    constructor(canvasWrapper, components) {
        this.canvasWrapper = canvasWrapper;
        this.components = components;
    }

    update(deltaTime) {
        // const staleComponents = this.components.filter(c => c.shouldRender())
        // staleComponents.forEach(c => c.hide(this.canvasWrapper));
        // staleComponents.forEach(c => c.render(this.canvasWrapper));
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