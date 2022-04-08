import CanvasWrapper from "./lib/canvas.js";

function test() {
    requestAnimationFrame(test);
    
}

function animationControls_EnableDisable_clickHandler() {
    console.log('enable/disable clicked')
    requestAnimationFrame(test)
}

function animationControls_Reset_clickHandler() {
    console.log('reset clicked')   
}

document.getElementById('enabler')
    .addEventListener('click', animationControls_EnableDisable_clickHandler);
document.getElementById('reset')
    .addEventListener('click', animationControls_Reset_clickHandler)

const canvas = CanvasWrapper.fromId('canvas')