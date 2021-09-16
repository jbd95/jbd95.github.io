import "./style.css";

import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// change the background color when the icons are hovered over
const welcomePage = document.getElementById("welcome");
console.log(welcomePage);
Array.from(document.getElementsByClassName("link")).map((e) => {
  console.log(e);
  const desiredClass =
    e.classList.length > 0 ? e.classList[e.classList.length - 1] : "";
  e.addEventListener("mouseover", () =>
    welcomePage.classList.add(desiredClass)
  );
  e.addEventListener("mouseout", () =>
    welcomePage.classList.remove(desiredClass)
  );
});

const scene = new THREE.Scene();

const fov = 35;

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// const camera = new THREE.OrthographicCamera(
//   -window.innerWidth / window.innerHeight / 0.5,
//   window.innerWidth / window.innerHeight / 0.5,
//   window.innerWidth / window.innerWidth / 0.5,
//   -window.innerWidth / window.innerWidth / 0.5,
//   -100,
//   1000
// );

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const offsetToFitVertically = Math.abs(30 / 2 / Math.tan(fov / 2));
const offsetToFitHorizontally = Math.abs(
  12 / 2 / Math.tan((fov * camera.aspect) / 2)
);

console.log(offsetToFitHorizontally);
console.log(offsetToFitVertically);

const finalOffset =
  window.innerHeight >= window.innerWidth
    ? offsetToFitHorizontally
    : offsetToFitVertically;
camera.position.setZ(offsetToFitVertically);
camera.position.setY(1);

const light = new THREE.PointLight("#f0f0f0", 3, 10);
light.position.set(0, 7, 5);

scene.add(light);

class Laptop {
  constructor() {
    this.model = null;
    this.visible = false;
    this.lid = null;
    this.bottom = null;
  }

  async load(name) {
    const loader = new OBJLoader();
    this.model = await loader.loadAsync(name);
    this.bottom = this.model.children[0];
    this.lid = this.model.children[1];
  }

  show() {
    this.rotateAboutPoint(
      this.model,
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 1, 0),
      THREE.Math.degToRad(180)
    );
    scene.add(this.model);
    this.visible = true;

    console.log(new THREE.Box3().setFromObject(this.lid));
  }

  isVisible() {
    return this.visible;
  }

  startOpenLidAnimation() {
    // this.rotateAboutPoint(
    //   this.model,
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(0, 1, 0),
    //   THREE.Math.degToRad(180)
    // );
    this.rotateAboutPoint(
      this.lid,
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(1, 0, 0),
      THREE.Math.degToRad(-90)
    );
  }

  startCloseLidAnimation() {
    this.rotateAboutPoint(
      this.lid,
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(1, 0, 0),
      THREE.Math.degToRad(0)
    );
  }

  openLidAnimationUpdate() {
    if (this.lid.rotation.x < 0) {
      this.rotateAboutPoint(
        this.lid,
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(1, 0, 0),
        THREE.Math.degToRad(1)
      );
      // this.rotateAboutPoint(
      //   this.model,
      //   new THREE.Vector3(0, 0, 0),
      //   new THREE.Vector3(0, 1, 0),
      //   THREE.Math.degToRad(2)
      // );
    }
  }

  closeLidAnimationUpdate() {
    if (this.lid.rotation.x > -Math.PI / 2)
      this.rotateAboutPoint(
        this.lid,
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(-1, 0, 0),
        THREE.Math.degToRad(1)
      );
  }

  // taken from https://stackoverflow.com/questions/42812861/three-js-pivot-point
  // obj - your object (THREE.Object3D or derived)
  // point - the point of rotation (THREE.Vector3)
  // axis - the axis of rotation (normalized THREE.Vector3)
  // theta - radian value of rotation
  // pointIsWorld - boolean indicating the point is in world coordinates (default = false)
  rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
    pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld;

    if (pointIsWorld) {
      obj.parent.localToWorld(obj.position); // compensate for world coordinate
    }

    obj.position.sub(point); // remove the offset
    obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
    obj.position.add(point); // re-add the offset

    if (pointIsWorld) {
      obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
    }

    obj.rotateOnAxis(axis, theta); // rotate the OBJECT
  }
}

const controls = new OrbitControls(camera, renderer.domElement);

const laptop = new Laptop();
await laptop.load("laptop.obj");
laptop.show();

laptop.startOpenLidAnimation();
//laptop.startCloseLidAnimation();

document.getElementById("bg").onclick = function () {
  laptop.startOpenLidAnimation();
};

function animate() {
  requestAnimationFrame(animate);

  laptop.openLidAnimationUpdate();
  //laptop.closeLidAnimationUpdate();

  //controls.update();

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);

animate();
