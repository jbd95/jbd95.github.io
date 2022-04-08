class CanvasWrapper {
  canvas;
  ctx;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  static fromId(canvasId) {
    return new CanvasWrapper(document.getElementById(canvasId));
  }

  clearBackground() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  clearRect(position, width, height) {
    this.ctx.clearRect(position.x, position.y, width, height);
  }
}

export default CanvasWrapper;
