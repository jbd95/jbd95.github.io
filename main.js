import CanvasWrapper from "./lib/canvas.js";
import Engine from "./lib/engine.js";
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
    console.log("enable/disable clicked");
    console.log(engine.isRunning())
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

for(let i = 20; i < 600; i += 20) {
  for(let j = 20; j < 600; j += 20) {
    engine.addComponent(new Pixel(i, j, 20, 20, 5, 'white'));
  }
}

engine.start();