import * as THREE from "../../../node_modules/three/build/three.module.js";
console.log("hej");
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";
const BODY_RESTITUTION = 0.9;
//variable declaration section
let physicsWorld,
  scene,
  camera,
  renderer,
  controls,
  tmpTrans,
  rigidBodies = [];

let ballCount = 0;
let colGroupPlane = 1,
  colGroupRedBall = 2,
  colGroupGreenBall = 4;

let clock = new THREE.Clock();

const mapWidth = 50;
const mapDepth = 4;
const mapHeight = 85;

//Ammojs Initialization
Ammo().then(start);

function start() {
  tmpTrans = new Ammo.btTransform();

  setupPhysicsWorld();

  setupGraphics();

  //createBlock();
  //Ground
  createBlock({ x: mapWidth, y: 1, z: mapDepth }, { x: 0, y: 0, z: 0 });
  //Right Wall
  createBlock(
    { x: 1, y: mapHeight, z: mapDepth },
    { x: mapWidth / 2, y: mapHeight / 2, z: 0 }
  );
  //Left Wall
  createBlock(
    { x: 1, y: mapHeight, z: mapDepth },
    { x: -(mapWidth / 2), y: mapHeight / 2, z: 0 }
  );
  //Back Wall
  createBlock(
    { x: mapWidth, y: mapHeight, z: 1 },
    { x: 0, y: mapHeight / 2, z: -mapDepth / 2 }
  );
  //Celling
  createBlock({ x: mapWidth, y: 1, z: mapDepth }, { x: 0, y: mapHeight, z: 0 });
  //Front Wall
  createBlock(
    { x: mapWidth, y: mapHeight, z: 1 },
    { x: 0, y: mapHeight / 2, z: mapDepth / 2 },
    0xa0afa4,
    0.5,
    true
  );

  //Cylindrar
  createCylinder({ x: 0, y: 55, z: 0 });
  //Rad 2
  createCylinder({ x: 4, y: 50, z: 0 });
  createCylinder({ x: -4, y: 50, z: 0 });
  //Rad 3
  createCylinder({ x: 0, y: 45, z: 0 });
  createCylinder({ x: 8, y: 45, z: 0 });
  createCylinder({ x: -8, y: 45, z: 0 });
  //rad 4
  createCylinder({ x: 4, y: 40, z: 0 });
  createCylinder({ x: -4, y: 40, z: 0 });
  createCylinder({ x: 12, y: 40, z: 0 });
  createCylinder({ x: -12, y: 40, z: 0 });
  //Rad 5
  createCylinder({ x: 0, y: 35, z: 0 });
  createCylinder({ x: 8, y: 35, z: 0 });
  createCylinder({ x: -8, y: 35, z: 0 });
  createCylinder({ x: 16, y: 35, z: 0 });
  createCylinder({ x: -16, y: 35, z: 0 });
  //Rad 6
  createCylinder({ x: 4, y: 30, z: 0 });
  createCylinder({ x: -4, y: 30, z: 0 });
  createCylinder({ x: 12, y: 30, z: 0 });
  createCylinder({ x: -12, y: 30, z: 0 });
  createCylinder({ x: 20, y: 30, z: 0 });
  createCylinder({ x: -20, y: 30, z: 0 });

  //Längs ner
  createBlock({ x: 1.5, y: 10, z: mapDepth }, { x: 0, y: 5, z: 0 }, 0x202020);
  createCylinder({ x: 0, y: 10, z: 0 });

  createBlock(
    { x: 1.5, y: 10, z: mapDepth },
    { x: 12.5, y: 5, z: 0 },
    0x202020
  );
  createCylinder({ x: 12.5, y: 10, z: 0 });

  createBlock(
    { x: 1.5, y: 10, z: mapDepth },
    { x: -12.5, y: 5, z: 0 },
    0x202020
  );
  createCylinder({ x: -12.5, y: 10, z: 0 });

  createBall();

  animate();
}

function setupPhysicsWorld() {
  let collisionConfiguration = new Ammo.btDefaultCollisionConfiguration(),
    dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration),
    overlappingPairCache = new Ammo.btDbvtBroadphase(),
    solver = new Ammo.btSequentialImpulseConstraintSolver();

  physicsWorld = new Ammo.btDiscreteDynamicsWorld(
    dispatcher,
    overlappingPairCache,
    solver,
    collisionConfiguration
  );
  physicsWorld.setGravity(new Ammo.btVector3(0, -9.81, 0));
}

function setupGraphics() {
  scene = new THREE.Scene();
  const viewWidth = 800;
  const viewHeight = 400;

  camera = new THREE.PerspectiveCamera(75, viewWidth / viewHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(viewWidth, viewHeight);

  renderer.setClearColor(0xff0000, 1);

  camera.position.setZ(30);
  camera.position.setY(30);

  const pointerLight = new THREE.PointLight(0xffffff);
  pointerLight.position.set(20, 20, 20);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointerLight, ambientLight);

  controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  let deltaTime = clock.getDelta();

  updatePhysics(deltaTime);

  controls.update();

  renderer.render(scene, camera);
}

function createBlock(
  scale = { x: 50, y: 2, z: 50 },
  pos = { x: 0, y: 0, z: 0 },
  colors = 0xa0afa4,
  opacity1 = 1,
  trans = false
) {
  let quat = { x: 0, y: 0, z: 0, w: 1 };
  let mass = 0;

  //threeJS Section
  let blockPlane = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial({
      color: colors,
      opacity: opacity1,
      transparent: trans,
    })
  );

  blockPlane.position.set(pos.x, pos.y, pos.z);
  blockPlane.scale.set(scale.x, scale.y, scale.z);

  blockPlane.castShadow = true;
  blockPlane.receiveShadow = true;

  scene.add(blockPlane);

  //Ammojs Section
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
  transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
  let motionState = new Ammo.btDefaultMotionState(transform);

  let colShape = new Ammo.btBoxShape(
    new Ammo.btVector3(scale.x * 0.5, scale.y * 0.5, scale.z * 0.5)
  );
  colShape.setMargin(0.05);

  let localInertia = new Ammo.btVector3(0, 0, 0);
  colShape.calculateLocalInertia(mass, localInertia);

  let rbInfo = new Ammo.btRigidBodyConstructionInfo(
    mass,
    motionState,
    colShape,
    localInertia
  );

  let body = new Ammo.btRigidBody(rbInfo);
  body.setRestitution(BODY_RESTITUTION);
  physicsWorld.addRigidBody(body);
}

function createCylinder(pos = { x: 0, y: 0, z: 0 }) {
  let scale = { x: 1.1, y: mapDepth, z: 1.1 };
  let quat = { x: Math.PI / 2, y: 0, z: 0, w: 1 };
  let mass = 0;

  //threeJS Section
  let CylinderPlane = new THREE.Mesh(
    new THREE.CylinderGeometry(),
    new THREE.MeshPhongMaterial({
      color: 0x202020,
    })
  );

  CylinderPlane.position.set(pos.x, pos.y, pos.z);
  CylinderPlane.rotation.x = quat.x;
  //CylinderPlane.rotation.set(new THREE.Vector3(quat.x, quat.y, quat.z));
  CylinderPlane.scale.set(scale.x, scale.y, scale.z);

  CylinderPlane.castShadow = true;
  CylinderPlane.receiveShadow = true;

  scene.add(CylinderPlane);

  //Ammojs Section
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
  transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
  let motionState = new Ammo.btDefaultMotionState(transform);

  let colShape = new Ammo.btCylinderShape(
    new Ammo.btVector3(scale.x * 0.5, scale.y * 0.5, scale.z * 0.5)
  );
  colShape.setMargin(0.05);

  let localInertia = new Ammo.btVector3(0, 0, 0);
  colShape.calculateLocalInertia(mass, localInertia);

  let rbInfo = new Ammo.btRigidBodyConstructionInfo(
    mass,
    motionState,
    colShape,
    localInertia
  );

  let body = new Ammo.btRigidBody(rbInfo);
  body.setRestitution(BODY_RESTITUTION);
  physicsWorld.addRigidBody(body);
}

function createBall() {
  let pos = {
    x: Math.random() * (3 - -3 + 1) + -3,
    y: Math.random() * (76 - 68 + 1) + 68,
    z: 0,
  };
  let radius = 1.2;
  let quat = { x: 0, y: 0, z: 0, w: 1 };
  let mass = 1;

  //threeJS Section
  let ball = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius),
    new THREE.MeshPhongMaterial({
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    })
  );

  ball.position.set(pos.x, pos.y, pos.z);

  ball.castShadow = true;
  ball.receiveShadow = true;

  scene.add(ball);

  //Ammojs Section
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
  transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
  let motionState = new Ammo.btDefaultMotionState(transform);

  let colShape = new Ammo.btSphereShape(radius);
  colShape.setMargin(0.05);

  let localInertia = new Ammo.btVector3(0, 0, 0);
  colShape.calculateLocalInertia(mass, localInertia);
  let rbInfo = new Ammo.btRigidBodyConstructionInfo(
    mass,
    motionState,
    colShape,
    localInertia
  );
  let body = new Ammo.btRigidBody(rbInfo);
  physicsWorld.addRigidBody(body);

  ball.userData.physicsBody = body;
  body.setRestitution(BODY_RESTITUTION);
  rigidBodies.push(ball);

  ballCount++;
  document.getElementById("ballCount").innerHTML =
    "Ball Count: " + ballCount.toString();
}

function updatePhysics(deltaTime) {
  // Step world
  physicsWorld.stepSimulation(deltaTime, 10);

  // Update rigid bodies
  for (let i = 0; i < rigidBodies.length; i++) {
    let objThree = rigidBodies[i];
    let objAmmo = objThree.userData.physicsBody;
    let ms = objAmmo.getMotionState();
    if (ms) {
      ms.getWorldTransform(tmpTrans);
      let p = tmpTrans.getOrigin();
      let q = tmpTrans.getRotation();
      objThree.position.set(p.x(), p.y(), p.z());
      objThree.quaternion.set(q.x(), q.y(), q.z(), q.w());
    }
  }
}

document.getElementById("spawnOneBall").onclick = function () {
  createBall();
};

document.getElementById("spawn50Ball").onclick = function () {
  for (let i = 0; i < 50; i++) {
    createBall();
  }
};
