var angle = 0;
var locX = 250;
var locY = 0;
var locZ = 10;
var cvn;
var img;
var img2;
var graphics;
var textual;
var obj;
var cam;
var vid;

function preload() {
  img = loadImage("assets/hidden-in-crowd1000.jpg");
  obj = loadModel("assets/female02.obj");
  img2 = loadImage("assets/bird.jpg");
  vid = createVideo(["assets/Walking in an open area.mp4"]);
}

function setup() {
  cvn = createCanvas(1280, 720, WEBGL);

  cam = createCapture(VIDEO);
  cam.hide();
  vid.hide();
}

function draw() {
  var dx = mouseX - width / 2;
  var dy = -1 * (mouseY - height / 2);
  var v = createVector(dx, dy, 0);
  v.normalize(50);
  var Zdist =
    (height / 2 / tan(PI / 2.25)) * sin((frameCount / 3) * 0.01) * 9.5;
  //console.log(Zdist);
  background(0);

  camera(0, 0, Zdist, 0, 0, 0, 0, 1, 0);
  ambientLight(127);
  ambientMaterial(color(127));
  directionalLight(255, 0, 250, 0, 0, 1);
  directionalLight(0, 255, 0, v);

  push();
  rotateY(angle * 0.05);
  rotateZ(angle * 0.05);
  rotateX(angle * 0.05);

  if (Zdist >= -290) {
    texture(cam);
    // vid.stop();
  } else {
    texture(vid);
    vid.play();
    vid.loop();
  }
  box(300, 300);

  pop();

  angle += 0.03;
}

// function mousePressed() {
// saveCanvas(cvn, 'myCanvas', 'jpg');
// }
