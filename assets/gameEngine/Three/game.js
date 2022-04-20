import * as THREE from "../../../node_modules/three/build/three.module.js";
console.log("hej");
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(800, 400);

camera.position.setZ(30);

const pointerLight = new THREE.PointLight(0xffffff);
pointerLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointerLight, ambientLight);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  smallSphere.rotation.x += 0.01;
  smallSphere.rotation.y += 0.005;
  smallSphere.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

//Skapa första bollen
const smallSphereTemp = new THREE.SphereGeometry(0.9, 32, 16);
const smallSphereColor = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const smallSphere = new THREE.Mesh(smallSphereTemp, smallSphereColor);

smallSphere.position.y = 10;

scene.add(smallSphere);

//Storlekar
const mapWidth = 25;
const mapLenght = 2;
const mapHight = 50;

// Skapa Grunden
const groundTemp = new THREE.BoxGeometry(mapWidth, 1, mapLenght);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const ground = new THREE.Mesh(groundTemp, material);
scene.add(ground);

animate();
