import CanvasWrapper from "./lib/canvas.js";
import Components from "./lib/components.js";
import Engine from "./lib/engine.js";
import Font from "./lib/font.js";
import Physics from "./lib/physics.js";
import Picture from "./lib/picture.js";
import Pixel from "./lib/pixel.js";
import Renderer from "./lib/renderer.js"
import Status from "./lib/status.js";

const canvas = CanvasWrapper.fromId('canvas')
const status = new Status();
const components = new Components();
const physics = new Physics(canvas, components, status);
const renderer = new Renderer(canvas, components);

const engine = new Engine(physics, renderer, components, status);

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
  

const font = new Font('Times New Roman', 30, canvas);
font.addText('James Brady', 'white', 7);
font.addText('Software Engineer', '#D4C2FC', 4);

// const picture = new Picture('./resources/water.jpg',
//   window.innerWidth, window.innerHeight, 0.1, { x: 0, y: 0 }, canvas);

// picture.calculate(components);

components.addComponents(font.getPixels());
engine.start();