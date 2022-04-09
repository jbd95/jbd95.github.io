class CanvasWrapper {
  canvas;
  ctx;
  width;
  height;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  static fromId(canvasId) {
    return new CanvasWrapper(document.getElementById(canvasId));
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  clearRect(position, width, height) {
    this.ctx.clearRect(position.x, position.y, width, height);
  }

  drawPixel(position, width, height, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(position.x, position.y, width, height);
  }

  drawPixels(pixels) {
    pixels.forEach(pixel => this.drawPixel(pixel.getPosition(), pixel.getWidth(), pixel.getHeight(), pixel.getColor()))
  }

  handleWindowResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.width = this.canvas.width;
    //account for footer height
    this.height = this.canvas.height - 48;
  }
}

export default CanvasWrapper;
