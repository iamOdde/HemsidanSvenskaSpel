console.log("kingkong");
console.log("yääää");

var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  // Add a lights to the scene

  //Your Code

  return scene;
};

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format

const scene = createScene(); //Call the createScene function
engine.setSize(800, 400);

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});

const camera = new BABYLON.ArcRotateCamera(
  "camera",
  -Math.PI / 2,
  Math.PI / 2.5,
  3,
  //new BABYLON.Vector3(0, 0, 0),
  new BABYLON.Vector3(0, 35, -50),
  scene
);
camera.attachControl(canvas, true);
//camera.inputs.clear();

const light = new BABYLON.HemisphericLight(
  "light",
  new BABYLON.Vector3(0, 10, -10),
  scene
);
const light2 = new BABYLON.HemisphericLight(
  "light",
  new BABYLON.Vector3(0, 10, 10),
  scene
);

const mapWidth = 25;
const mapLenght = 6;
const mapHight = 50;

var ground = BABYLON.Mesh.CreateGround("ground", mapWidth, mapLenght, 1, scene);
ground.position.y = -1;

const wallBack = BABYLON.MeshBuilder.CreateBox(
  "plane",
  { height: mapHight, width: mapWidth, depth: 0.1 },
  scene
);

wallBack.position.z = mapLenght / 2;
wallBack.position.y = mapHight / 2 - 1;

const wallFront = BABYLON.MeshBuilder.CreateBox(
  "plane",
  { height: mapHight, width: mapWidth, depth: 0.1 },
  scene
);

wallFront.position.z = -(mapLenght / 2);
wallFront.position.y = mapHight / 2 - 1;
wallFront.visibility = 0.1;

const wallLeft = BABYLON.MeshBuilder.CreateBox(
  "plane",
  { height: mapHight, width: 0.1, depth: mapLenght },
  scene
);

wallLeft.position.x = -(mapWidth / 2);
wallLeft.position.y = mapHight / 2 - 1;

const wallRight = BABYLON.MeshBuilder.CreateBox(
  "plane",
  { height: mapHight, width: 0.1, depth: mapLenght },
  scene
);

wallRight.position.x = mapWidth / 2;
wallRight.position.y = mapHight / 2 - 1;

//Cylinders rad 1

const cylinder1 = BABYLON.MeshBuilder.CreateCylinder(
  "cylinder",
  { height: mapLenght, width: 1, depth: 1 },
  scene
);
const cylinderColor = new BABYLON.StandardMaterial("cylinderColor");
cylinderColor.diffuseColor = new BABYLON.Color3.Blue();
cylinder1.material = cylinderColor;

const mapHight2 = mapHight - 10;

cylinder1.rotation.x = BABYLON.Tools.ToRadians(90);
cylinder1.position.x = 0;
cylinder1.position.y = mapHight2 - 5;
cylinder1.position.z = 0;

//Rad 2
const cylinder2 = cylinder1.clone("cylinder");
cylinder2.position.x = 2;
cylinder2.position.y = mapHight2 - 8;
cylinder2.position.z = 0;

const cylinder3 = cylinder1.clone("cylinder");
cylinder3.position.x = -2;
cylinder3.position.y = mapHight2 - 8;
cylinder3.position.z = 0;

// Rad 3
const cylinder4 = cylinder1.clone("cylinder");
cylinder4.position.x = 0;
cylinder4.position.y = mapHight2 - 11;
cylinder4.position.z = 0;

const cylinder5 = cylinder1.clone("cylinder");
cylinder5.position.x = 4;
cylinder5.position.y = mapHight2 - 11;
cylinder5.position.z = 0;

const cylinder6 = cylinder1.clone("cylinder");
cylinder6.position.x = -4;
cylinder6.position.y = mapHight2 - 11;
cylinder6.position.z = 0;

//Rad med 4

const cylinder7 = cylinder1.clone("cylinder");
cylinder7.position.x = -2;
cylinder7.position.y = mapHight2 - 14;
cylinder7.position.z = 0;
const cylinder8 = cylinder1.clone("cylinder");
cylinder8.position.x = -6;
cylinder8.position.y = mapHight2 - 14;
cylinder8.position.z = 0;
const cylinder9 = cylinder1.clone("cylinder");
cylinder9.position.x = 2;
cylinder9.position.y = mapHight2 - 14;
cylinder9.position.z = 0;
const cylinder10 = cylinder1.clone("cylinder");
cylinder10.position.x = 6;
cylinder10.position.y = mapHight2 - 14;
cylinder10.position.z = 0;

// Rad med 5
const cylinder11 = cylinder1.clone("cylinder");
cylinder11.position.x = 0;
cylinder11.position.y = mapHight2 - 17;
cylinder11.position.z = 0;
const cylinder12 = cylinder1.clone("cylinder");
cylinder12.position.x = 4;
cylinder12.position.y = mapHight2 - 17;
cylinder12.position.z = 0;
const cylinder13 = cylinder1.clone("cylinder");
cylinder13.position.x = -4;
cylinder13.position.y = mapHight2 - 17;
cylinder13.position.z = 0;
const cylinder14 = cylinder1.clone("cylinder");
cylinder14.position.x = 8;
cylinder14.position.y = mapHight2 - 17;
cylinder14.position.z = 0;
const cylinder15 = cylinder1.clone("cylinder");
cylinder15.position.x = -8;
cylinder15.position.y = mapHight2 - 17;
cylinder15.position.z = 0;

//Rad med 6
const cylinder16 = cylinder1.clone("cylinder");
cylinder16.position.x = -2;
cylinder16.position.y = mapHight2 - 20;
cylinder16.position.z = 0;
const cylinder17 = cylinder1.clone("cylinder");
cylinder17.position.x = -6;
cylinder17.position.y = mapHight2 - 20;
cylinder17.position.z = 0;
const cylinder18 = cylinder1.clone("cylinder");
cylinder18.position.x = -10;
cylinder18.position.y = mapHight2 - 20;
cylinder18.position.z = 0;
const cylinder19 = cylinder1.clone("cylinder");
cylinder19.position.x = 2;
cylinder19.position.y = mapHight2 - 20;
cylinder19.position.z = 0;
const cylinder20 = cylinder1.clone("cylinder");
cylinder20.position.x = 6;
cylinder20.position.y = mapHight2 - 20;
cylinder20.position.z = 0;
const cylinder21 = cylinder1.clone("cylinder");
cylinder21.position.x = 10;
cylinder21.position.y = mapHight2 - 20;
cylinder21.position.z = 0;

//Bollarna
const smallSphere = BABYLON.MeshBuilder.CreateSphere("sphereCube", {
  width: 5,
  height: 5,
  depth: 5,
});
const sphereColor = new BABYLON.StandardMaterial("SphereColor");
sphereColor.diffuseColor = new BABYLON.Color3.Black();
smallSphere.material = sphereColor;

//Lägger till fysik
await Ammo();
scene.enablePhysics(
  new BABYLON.Vector3(0, -9.81, 0),
  new BABYLON.AmmoJSPlugin()
);

smallSphere.physicsImpostor = new BABYLON.PhysicsImpostor(
  smallSphere,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 1, restitution: 0.9 },
  scene
);
ground.physicsImpostor = new BABYLON.PhysicsImpostor(
  ground,
  BABYLON.PhysicsImpostor.BoxImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
wallLeft.physicsImpostor = new BABYLON.PhysicsImpostor(
  wallLeft,
  BABYLON.PhysicsImpostor.BoxImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
wallRight.physicsImpostor = new BABYLON.PhysicsImpostor(
  wallRight,
  BABYLON.PhysicsImpostor.BoxImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
wallBack.physicsImpostor = new BABYLON.PhysicsImpostor(
  wallBack,
  BABYLON.PhysicsImpostor.BoxImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
wallFront.physicsImpostor = new BABYLON.PhysicsImpostor(
  wallFront,
  BABYLON.PhysicsImpostor.BoxImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
smallSphere.position.y = 45;
smallSphere.position.x = 0.1;
ground.checkCollisions = true;
smallSphere.checkCollisions = true;
cylinder1.checkCollisions = true;
cylinder2.checkCollisions = true;
cylinder3.checkCollisions = true;
cylinder4.checkCollisions = true;
cylinder5.checkCollisions = true;
cylinder6.checkCollisions = true;
cylinder7.checkCollisions = true;
cylinder8.checkCollisions = true;
cylinder9.checkCollisions = true;
cylinder10.checkCollisions = true;
cylinder11.checkCollisions = true;
cylinder12.checkCollisions = true;
cylinder13.checkCollisions = true;
cylinder14.checkCollisions = true;
cylinder15.checkCollisions = true;
cylinder16.checkCollisions = true;
cylinder17.checkCollisions = true;
cylinder18.checkCollisions = true;
cylinder19.checkCollisions = true;
cylinder20.checkCollisions = true;
cylinder21.checkCollisions = true;

cylinder1.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder1,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder2.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder2,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder3.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder3,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder4.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder4,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder5.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder5,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder6.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder6,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder7.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder7,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder8.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder8,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder9.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder9,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder10.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder10,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder11.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder11,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder12.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder12,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder13.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder13,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder14.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder14,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder15.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder15,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder16.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder16,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder17.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder17,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder18.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder18,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder19.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder19,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder20.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder20,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
cylinder21.physicsImpostor = new BABYLON.PhysicsImpostor(
  cylinder21,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);

var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
  "UI"
);

// Funktion för att skapa bollar

var createBall = function () {
  var ball = new BABYLON.MeshBuilder.CreateSphere("sphereCube", {
    width: 5,
    height: 5,
    depth: 5,
  });
  ball.physicsImpostor = new BABYLON.PhysicsImpostor(
    ball,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 0.9 },
    scene
  );
  ball.checkCollisions = true;
  ball.position.y = 45;
  ball.position.x = -0.1;
  const ballColor = new BABYLON.StandardMaterial("ballColor");
  ballColor.diffuseColor = new BABYLON.Color3(
    Math.random() * 2,
    Math.random() * 2,
    Math.random() * 2
  );
  ball.material = ballColor;
  ballCount = ballCount + 1;
  text1.text = ballCount + " balls";
  return ball;
};
let ballCount = 1;
//Ball counter top right
var text1 = new BABYLON.GUI.TextBlock();
text1.text = "1 Ball";
text1.color = "white";
text1.fontSize = 24;
text1.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
text1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
advancedTexture.addControl(text1);

//Spawn ball knappar
var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Spawn 1 Ball");
button1.width = "100px";
button1.height = "40px";
button1.color = "black";
button1.cornerRadius = 5;
button1.background = "white";
button1.left;
button1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
button1.onPointerUpObservable.add(function () {
  //console.log("Boll");
  createBall();
});
advancedTexture.addControl(button1);

var button2 = BABYLON.GUI.Button.CreateSimpleButton("but2", "Spawn 50 Balls");
button2.width = "100px";
button2.left = "100px";
button2.height = "40px";
button2.color = "black";
button2.cornerRadius = 5;
button2.background = "white";
button2.left;
button2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
button2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
button2.onPointerUpObservable.add(function () {
  //console.log("Boll");
  for (let i = 0; i < 50; i++) {
    createBall();
  }
});
advancedTexture.addControl(button2);

const tick = () => {
  console.log("FPS: ", engine.getFps().toFixed());
};
setInterval(tick, 1000);
