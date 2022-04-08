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

  drawPixel(position, width, height, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(position.x, position.y, width, height);
    console.log('drew pixel')
  }

  drawPixels(pixels) {
    pixels.forEach(pixel => this.drawPixel(pixel.getPosition(), pixel.getWidth(), pixel.getHeight(), pixel.getColor()))
  }
}

export default CanvasWrapper;
