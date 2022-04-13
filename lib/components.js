class Components {
    components = [];
    enabledComponents = [];

    addComponent(component) {
        this.components.push(component);
        this.enabledComponents = this.components;
    }

    addComponents(components) {
        this.components = this.components.concat(components);
        this.enabledComponents = this.components;
    }

    getAll() {
        return this.components;
    }

    getEnabled() {
        this.enabledComponents = this.enabledComponents.filter(c => c.isEnabled());
        return this.enabledComponents;
    }

    reset() {
        this.components.forEach(c => c.reset());
        this.enabledComponents = this.components;
    }
}

export default Components;