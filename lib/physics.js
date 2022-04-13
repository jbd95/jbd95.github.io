class Physics {
    canvasWrapper;
    components;
    status;
    lastMouseMoveTime;
    lastTouchMoveTime;
    lastTouchMoveX;
    lastTouchMoveY;
    mouseMass = 2;
    
    constructor(canvasWrapper, components, status) {
        this.canvasWrapper = canvasWrapper;
        this.components = components;
        this.status = status;
        this.lastMouseMoveTime = undefined;
        this.lastTouchMoveTime = undefined;
        this.lastTouchMoveX = undefined;
        this.lastTouchMoveY = undefined;

        this.canvasWrapper.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.canvasWrapper.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this));
        this.canvasWrapper.canvas.addEventListener('touchend', this.handleTouchMoveEnd.bind(this));
    }

    update(deltaTime) {
        const enabledComponents = this.components.getEnabled();
        enabledComponents.forEach(c => this.handleWallCollisions(c));
        enabledComponents.forEach(c => this.updateVelocity(deltaTime, c));
        enabledComponents.forEach(c => this.updatePosition(deltaTime, c));
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
        
        this.components.getEnabled()
            .forEach(c => this.isMouseCollidingWithComponent(c, event, mouseVelocity))
    }

    handleTouchMove(event) {
        if(!this.status.isRunning())
            return;

        const touchMoveVelocity = this.getTouchMoveVelocity(event);
        
        this.components.getEnabled()
            .forEach(c => this.isMouseCollidingWithComponent(c, event.touches[0], touchMoveVelocity))
    }

    handleTouchMoveEnd() {
        this.lastTouchMoveTime = undefined;
        this.lastTouchMoveX = undefined;
        this.lastTouchMoveY = undefined;
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

    getTouchMoveDeltaTime(timestamp) {
        if(!this.lastTouchMoveTime) {
            this.lastTouchMoveTime = timestamp;
            return 0;
        }
        const deltaTime = timestamp - this.lastTouchMoveTime;
        this.lastTouchMoveTime = timestamp;
        return deltaTime / 1000;
    }

    getTouchMoveVelocity(event) {
        const touchMoveDeltaTime = this.getTouchMoveDeltaTime(event.timeStamp);

        if(!this.lastTouchMoveX) {
            this.lastTouchMoveX = event.touches[0].clientX;
        }
        
        if(!this.lastTouchMoveY) {
            this.lastTouchMoveY = event.touches[0].clientY;
        }

        let touchVelocity = { x: 5, y: 5 };
        if (touchMoveDeltaTime !== 0) {
            touchVelocity = {
                x: (event.touches[0].clientX - this.lastTouchMoveX) / touchMoveDeltaTime,
                y: (event.touches[0].clientY - this.lastTouchMoveY) / touchMoveDeltaTime
            };
        }

        this.lastTouchMoveX = event.touches[0].clientX;
        this.lastTouchMoveY = event.touches[0].clientY;
        return touchVelocity;
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
        this.components.reset();
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
            newVelocity.x *= -0.75;
        if(position.x <= 0 && newVelocity.x < 0)
            newVelocity.x *= -0.75;
        if (
            position.y + component.getHeight() >= height && newVelocity.y > 0
        )
            newVelocity.y *= -0.75;

        if(position.y <= 0 && newVelocity.y < 0)
            newVelocity.y *= -0.75;

        if (
            position.y + component.getHeight() > height
            && Math.abs(newVelocity.y) < 1
        ) {
            newPosition.y = height - component.getHeight();
            newAcceleration = { x: 0, y: 0 };
            newVelocity = { x: 0, y: 0 };
            component.setDisabled();
        }

        component.setPosition(newPosition.x, newPosition.y);
        component.setVelocity(newVelocity.x, newVelocity.y);
        component.setAcceleration(newAcceleration.x, newAcceleration.y);
    }
}

export default Physics;