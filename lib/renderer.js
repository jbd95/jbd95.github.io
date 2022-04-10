class Renderer {
    canvasWrapper;
    components = [];

    constructor(canvasWrapper) {
        this.canvasWrapper = canvasWrapper;
    }

    update(deltaTime) {
        // const staleComponents = this.components.filter(c => c.shouldRender())
        // staleComponents.forEach(c => c.hide(this.canvasWrapper));
        // staleComponents.forEach(c => c.render(this.canvasWrapper));

        if(this.components.some(c => c.shouldRender(this.canvasWrapper))) {
            this.canvasWrapper.clear();
            this.components.forEach(c => c.render(this.canvasWrapper));
        }
    }

    addComponent(component) {
        this.components.push(component);
    }

    addComponents(components) {
        this.components.push(...components);
    }

    reset() {
        this.canvasWrapper.clear();
        this.components.forEach(c => c.render(this.canvasWrapper))
    }
}

export default Renderer;