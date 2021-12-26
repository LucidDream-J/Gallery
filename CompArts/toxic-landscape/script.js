var scene, camera, renderer, box1, box2;

init();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color('grey');

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(1.95, 0.05,1.0);

  const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set(1, 10, 6);
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  const assetPath_1 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/';
  const assetPath = './texture/';

  const alpha = new THREE.TextureLoader().load(`${assetPath}dots.png`);
  const tex = new THREE.TextureLoader().load(`${assetPath}bricks-diffuse3.png`);
  // const envMap = new THREE.CubeTextureLoader().setPath(`${assetPath}skybox2_`).load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
  const envMap = new THREE.CubeTextureLoader().setPath(`${assetPath}`).load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

  const cubemap = new THREE.CubeTextureLoader()
    .setPath(`${assetPath}`)
    .load([
      'px-1.jpg',
      'nx-1.jpg',
      'py-1.jpg',
      'ny-1.jpg',
      'pz-1.jpg',
      'nz-1.jpg'
    ]);

  scene.background = cubemap;

  //Add meshes here
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  const material = new THREE.MeshLambertMaterial({
    wireframe: false,
    envMap: envMap
  });
  const material1 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map: tex
  });
  const material2 = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    map: tex,
    alphaMap: alpha,
    transparent: true,
    side: THREE.DoubleSide
  });



  box1 = new THREE.Mesh(geometry, material);
  box1.position.x = -1;
  scene.add(box1);

  box2 = new THREE.Mesh(geometry, material);
  box2.position.x = 1;
  scene.add(box2);

  window.addEventListener('resize', resize, false);

  update();
}

function update() {
  requestAnimationFrame(update);
  renderer.render(scene, camera);
  box1.rotation.y += 0.0013;
  box2.rotation.y -= 0.0011;

}

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}