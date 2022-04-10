import CanvasWrapper from "./lib/canvas.js";
import Engine from "./lib/engine.js";
import Font from "./lib/font.js";
import Physics from "./lib/physics.js";
import Pixel from "./lib/pixel.js";
import Renderer from "./lib/renderer.js"
import Status from "./lib/status.js";

const canvas = CanvasWrapper.fromId('canvas')
const status = new Status();
const physics = new Physics(canvas, status);
const renderer = new Renderer(canvas);

const engine = new Engine(physics, renderer, status);

const enableButton = document.getElementById('enabler')


function animationControls_EnableDisable_clickHandler() {
    if (engine.isRunning()) {
      engine.stop();
      enableButton.textContent = "Enable";
    } else {
      engine.start();
      enableButton.textContent = "Disable";
    }
  }
  
  function animationControls_Reset_clickHandler() {
    engine.reset();
  }
  
  document
    .getElementById("enabler")
    .addEventListener("click", animationControls_EnableDisable_clickHandler);
  document
    .getElementById("reset")
    .addEventListener("click", animationControls_Reset_clickHandler);
  

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
// engine.addComponent(t);

const font = new Font('Times New Roman', 24, canvas);
font.addText('James Brady', 'white', 8);
font.addText('Software Engineer', '#D4C2FC', 5);

engine.addComponents(font.getPixels());
engine.start();