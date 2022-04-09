class Physics {
    canvasWrapper;
    status;
    components = [];
    lastMouseMoveTime;
    mouseMass = 2;
    
    constructor(canvasWrapper, status) {
        this.canvasWrapper = canvasWrapper;
        this.status = status;
        this.lastMouseMoveTime = undefined;

        this.canvasWrapper.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this))
    }

    update(deltaTime) {
        //this.components.forEach(c => c.setAcceleration(0, 9.8));
        this.components.forEach(c => this.handleWallCollisions(c));
        this.components.forEach(c => this.updateVelocity(deltaTime, c));
        this.components.forEach(c => this.updatePosition(deltaTime, c));
    }

    addComponent(component) {
        this.components.push(component);
    }

    handleMouseMove(event) {
        if(!this.status.isRunning())
            return;
        
        const mouseMoveDeltaTime = this.getMouseMoveDeltaTime(event.timeStamp);

        let mouseVelocity = { x: 0, y: 0 };
        if (mouseMoveDeltaTime !== 0) {
            mouseVelocity = {
                x: (event.movementX / mouseMoveDeltaTime),
                y: (event.movementY / mouseMoveDeltaTime)
            };
        }
        
        this.components.forEach(c => this.isMouseCollidingWithComponent(c, event, mouseVelocity))
    }

    getMouseMoveDeltaTime(timestamp) {
        if(!this.lastMouseMoveTime) {
            this.lastMouseMoveTime = timestamp;
            return 0;
        }
        const deltaTime = timestamp - this.lastMouseMoveTime;
        this.lastMouseMoveTime = timestamp;
        return deltaTime / 1000;
    }

    isMouseCollidingWithComponent(component, event, mouseVelocity) {
        const normalizedX = Math.round(
            event.clientX * (this.canvasWrapper.canvas.width / window.innerWidth)
        );
        const normalizedY = Math.round(
            event.clientY * (this.canvasWrapper.canvas.height / window.innerHeight)
        );
    
        const topLeftCorner = {
            x: Math.round(component.getPosition().x) - 10,
            y: Math.round(component.getPosition().y) - 10
        };
        const bottomRightCorner = {
            x: Math.round(component.getPosition().x + component.getWidth()) + 10,
            y: Math.round(component.getPosition().y + component.getHeight()) + 10
        };
    
        const doesMouseIntersect =
            normalizedX > topLeftCorner.x &&
            normalizedX < bottomRightCorner.x &&
            normalizedY > topLeftCorner.y &&
            normalizedY < bottomRightCorner.y;

        if (doesMouseIntersect) {
            component.setVelocity((mouseVelocity.x * this.mouseMass) / component.getMass(),
                (mouseVelocity.y * this.mouseMass) / component.getMass());
            component.setAcceleration(0, 9.8);
        }
    }

    reset() {
        this.components.forEach(c => c.reset());
    }

    updateVelocity(deltaTime, component) {
        let x = component.getVelocity().x;
        let y = component.getVelocity().y;

        x += (deltaTime * component.getAcceleration().x * 10);
        y += (deltaTime * component.getAcceleration().y * 10);

        component.setVelocity(x, y);
    }

    updatePosition(deltaTime, component) {
        let x = component.getPosition().x;
        let y = component.getPosition().y;

        x += (deltaTime * component.getVelocity().x);
        y += (deltaTime * component.getVelocity().y);

        component.setPosition(x, y);
    }

    handleWallCollisions(component) {
        const position = component.getPosition();
        const width = this.canvasWrapper.width;
        const height = this.canvasWrapper.height;
        
        let newPosition = { x: position.x, y: position.y };
        let newVelocity = { x: component.getVelocity().x, y: component.getVelocity().y };
        let newAcceleration = { x: component.getAcceleration().x, y: component.getAcceleration().y };

        if (position.x >= width && newVelocity.x > 0)
            newVelocity.x *= -0.9;
        if(position.x <= 0 && newVelocity.x < 0)
            newVelocity.x *= -0.9;
        if (
            position.y + component.getHeight() >= height && newVelocity.y > 0
        )
            newVelocity.y *= -0.75;

        if(position.y <= 0 && newVelocity.y < 0)
            newVelocity.y *= -0.9;

        if (
            position.y + component.getHeight() > height
            && Math.abs(newVelocity.y) < 1
        ) {
            newPosition.y = height - component.getHeight();
            newAcceleration = { x: 0, y: 0 };
            newVelocity = { x: 0, y: 0 };
        }

        component.setPosition(newPosition.x, newPosition.y);
        component.setVelocity(newVelocity.x, newVelocity.y);
        component.setAcceleration(newAcceleration.x, newAcceleration.y);
    }
}

export default Physics;