import CanvasWrapper from "./lib/canvas.js";
import Engine from "./lib/engine.js";
import Pixel from "./lib/pixel.js";

const engine = new Engine();

const enableButton = document.getElementById('enabler')


function animationControls_EnableDisable_clickHandler() {
    console.log("enable/disable clicked");
  
    if (engine.isRunning()) {
      engine.stop();
      enableButton.textContent = "Enable";
    } else {
      engine.start();
      enableButton.textContent = "Disable";
    }
  }
  
  function animationControls_Reset_clickHandler() {
    console.log("reset clicked");
  }
  
  document
    .getElementById("enabler")
    .addEventListener("click", animationControls_EnableDisable_clickHandler);
  document
    .getElementById("reset")
    .addEventListener("click", animationControls_Reset_clickHandler);
  


const canvas = CanvasWrapper.fromId('canvas')

// class Test {
//     update() {
//         canvas.clearBackground();
//         canvas.ctx.fillStyle = 'white'
//         canvas.ctx.beginPath();
//         canvas.ctx.rect(Math.random() * 20, Math.random() * 20, 100, 100)
//         canvas.ctx.stroke();
//     }
// }
// const t = new Test();
// engine.addObject(t);

const pixel = new Pixel(20, 20, 100, 100, 'white')

canvas.drawPixel(pixel.getPosition(), pixel.getWidth(), pixel.getHeight(), pixel.getColor())
console.log(canvas.canvas.width)
console.log(canvas.canvas.height)
// engine.start();