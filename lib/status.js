class Status {
    enabled = false;
    disabledForPerformance = false;

    setDisabledForPerformance(value) {
        this.disabledForPerformance = value;
    }

    isEnabled() {
        return this.enabled;
    }

    setEnabled() {
        this.enabled = true;
    }

    setDisabled() {
        this.enabled = false;
    }

    isRunning() {
        return !this.disabledForPerformance && this.enabled;
    }

    isDisabledForPerformance() {
        return this.isDisabledForPerformance;
    }
}

export default Status;