import Pixel from "./pixel.js";

class Picture {
    url;
    width;
    height;
    position;
    canvasWrapper;
    pixels = [];

    constructor(url, width, height, position, canvasWrapper) {
        this.url = url;
        this.width = width;
        this.height = height;
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
            let gridWidth = 15, gridHeight = 15;
            const w = this.width / gridWidth;
            const h = this.height / gridHeight;
            for(let i = 0; i < gridWidth; i++) {
                for(let j = 0; j < gridHeight; j++) {
                    colors.push(
                        [ 0, 0, 0, 0 ]
                    )
                }
            }

            var data = this.canvasWrapper.ctx.getImageData(0, 0, this.width, this.height).data;

            for(let i = 0; i < data.length; i++) {
                const x = Math.floor(i / 47040) % 15;
                const y = Math.floor(i / 112) % 15;
                const idx = x + y * 15;
                
                colors[idx][i % 4] += data[i + (i % 4)];                                                
                // colors[idx][i % 4] += 1;
                // colors[idx][0] += 1;
                // colors[idx][1] += 1;
                // colors[idx][2] += 1;
                // colors[idx][3] += 1;

                // console.log(x, y, idx)
            }

            /*
                420 width / 15 = 28
                420 height / 15 = 28

                15x15 grid, each with 28 entries
                28x28 grid = 784 entries

                i * 28 + i % 28
            */


            for(let i = 0; i < gridWidth; i++) {
                for(let j = 0; j < gridHeight; j++) {
                    const idx = i * gridWidth + j;

                    //console.log(idx, colors[idx])

                    colors[idx][0] /= (28 * 28);
                    colors[idx][1] /= (28 * 28);
                    colors[idx][2] /= (28 * 28);
                    colors[idx][3] /= (28 * 28);

                    this.pixels.push(
                        new Pixel(
                            i * 28,
                            j * 28,
                            28,
                            28,
                            5,
                            `rgba(${colors[idx][0]},${colors[idx][1]},${colors[idx][2]},${colors[idx][3]})`
                        )
                    )
                }
            }

            for(let i = 0; i < gridWidth; i++) {
                for(let j = 0; j < gridHeight; j++) {
                    console.log(i, j, colors[i + j * gridHeight])
                }
            }

            this.canvasWrapper.clear();
            engine.addComponents(this.pixels);
        }
    }

    getPixels() {
        return this.pixels;
    }
}

export default Picture;