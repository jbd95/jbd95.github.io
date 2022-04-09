class Status {
    running = false;

    setEnabled() {
        this.running = true;
    }

    setDisabled() {
        this.running = false;
    }

    isRunning() {
        return this.running;
    }
}

export default Status;