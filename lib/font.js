import Pixel from "./pixel.js";

class Font {
    fontName;
    fontSize;
    canvasWrapper;
    allPixels = [];
    lastY = 0;
    texts = [];

    constructor(fontName, fontSize, canvasWrapper) {
        this.fontName = fontName;
        this.fontSize = fontSize;
        this.canvasWrapper = canvasWrapper;
    }

    convertTextToPixels(text, position, pixelSize, pixelSpacingMultiplier, color) {
        this.canvasWrapper.clear();
        this.canvasWrapper.ctx.fillStyle = 'white';
        this.canvasWrapper.ctx.fillText(
            text,
            this.canvasWrapper.canvas.width / 2 / pixelSize / pixelSpacingMultiplier,
            0
        );

        const data = new Uint32Array(
            this.canvasWrapper.ctx.getImageData(
                0,
                0,
                this.canvasWrapper.canvas.width,
                this.canvasWrapper.canvas.height
            ).data.buffer
        );

        let maxX = 0;
        let maxY = 0;
        let pixels = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i] & 0xffffffff) {
                let x =
                    (i % this.canvasWrapper.canvas.width) *
                    pixelSize *
                    pixelSpacingMultiplier;

                let y =
                    ((i / this.canvasWrapper.canvas.width) | 0) *
                    pixelSize *
                    pixelSpacingMultiplier;

                pixels.push(
                    new Pixel(
                        position.x + x,
                        position.y + y,
                        pixelSize,
                        pixelSize,
                        5,
                        color
                    )
                );
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, position.y + y);
            }
        }
        position.x += maxX + pixelSize;
        this.lastY = maxY;
        return pixels;
    }


    addText(text, color, maxPixelSize) {
        this.texts.push({ text, color, pixelSize: this.getIdealPixelSize(text, maxPixelSize) });
    }

    setFontStyle() {
        this.canvasWrapper.ctx.font = `${Math.round(this.fontSize)}px ${
            this.fontName
        }`;
        this.canvasWrapper.ctx.textAlign = "center";
        this.canvasWrapper.ctx.textBaseline = "top";
        this.canvasWrapper.ctx.fillStyle = "rgb(255, 255, 255)";
    }

    calculateText(text, color, pixelSize) {
        let pixelSpacingMultiplier = 1.1;
        this.setFontStyle();

        let position = {
          x: 0,
          y: this.lastY,
        };
    
        let pixels = this.convertTextToPixels(
          text,
          position,
          pixelSize,
          pixelSpacingMultiplier,
          color
        );
        this.canvasWrapper.clear();
        this.allPixels.push(...pixels)
    }

    getIdealPixelSize(text, maxPixelSize) {
        this.setFontStyle();
        const num = (window.innerWidth * 0.9) / this.canvasWrapper.ctx.measureText(text).width;
        return Math.min(maxPixelSize, Math.floor(num));
    }

    getPixels() {
        let combinedPixelSize = 0;
        this.texts.forEach(t => combinedPixelSize += t.pixelSize);
        this.lastY = (this.canvasWrapper.height / 2) - (this.fontSize * combinedPixelSize / 2);
        this.texts.forEach(t => this.calculateText(t.text, t.color, t.pixelSize))
        return this.allPixels;
    }
}

export default Font;
