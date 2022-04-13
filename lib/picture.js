import Pixel from "./pixel.js";

class Picture {
    url;
    width;
    height;
    position;
    canvasWrapper;
    pixels = [];
    resolution;

    constructor(url, width, height, resolution, position, canvasWrapper) {
        this.url = url;
        this.width = width;
        this.height = height;
        this.resolution = resolution;
        this.position = position;
        this.canvasWrapper = canvasWrapper;
    }

    calculate(engine) {
        const img = new Image(this.width, this.height)
        img.src = this.url;

        img.onload = () => {
            console.log('image loaded')

            this.canvasWrapper.clear();
            this.canvasWrapper.ctx.drawImage(img, 0, 0, this.width, this.height);
            
            let colors = [];
            let gridWidth = Math.round(this.width * this.resolution), gridHeight = Math.round(this.height * this.resolution);
            const w = this.width / gridWidth;
            const h = this.height / gridHeight;
            for(let i = 0; i < gridWidth; i++) {
                colors.push([]);
                for(let j = 0; j < gridHeight; j++) {
                    colors[i].push(
                        [ 0, 0, 0, 0 ]
                    )
                }
            }

            var data = this.canvasWrapper.ctx.getImageData(0, 0, this.width, this.height).data;

            for(let i = 0; i < this.width; i++) {
                for(let j = 0; j < this.height; j++) {
                    const idx = ((i * (this.width * 4)) + (j * 4))

                    const x = Math.floor(i / w);
                    const y = Math.floor(j / h);

                    colors[x][y][0] += data[idx];
                    colors[x][y][1] += data[idx + 1];
                    colors[x][y][2] += data[idx + 2];
                    colors[x][y][3] += data[idx + 3];
                }
            }
            
            for(let i = 0; i < gridWidth; i++) {
                for(let j = 0; j < gridHeight; j++) {
                    colors[i][j][0] /= (w * h);
                    colors[i][j][1] /= (w * h);
                    colors[i][j][2] /= (w * h);
                    colors[i][j][3] /= (w * h);

                    // do not render pixels that cannot be seen
                    if(colors[i][j][3] < 0.01) {
                        continue;
                    }

                    this.pixels.push(
                        new Pixel(
                            j * w,
                            i * h,
                            w,
                            h,
                            5,
                            `rgba(${colors[i][j][0]},${colors[i][j][1]},${colors[i][j][2]},${colors[i][j][3]})`
                        )
                    )
                }
            }

            console.log(this.pixels.length)

            this.canvasWrapper.clear();
            engine.addComponents(this.pixels);
        }
    }

    getPixels() {
        return this.pixels;
    }
}

export default Picture;