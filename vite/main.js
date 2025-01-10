import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
const canvas = document.getElementById('canvas');
//1. scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//2. camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//3. add object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#009999', emissive: "#095999"});

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxMaterial = new THREE.MeshStandardMaterial({color: '#999999', emissive: "#999999"});
const dodecahedron = new THREE.Mesh(geometry, material);
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;
scene.add(dodecahedron);
scene.add(box);

//4. add lighting
const light = new THREE.SpotLight(0x006769, 100)
light.position.set(1,1,1);
scene.add(light);

//5. render
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//6. add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//7. animation
function animate(){
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  box.rotation.y += 0.005;
  controls.update();
  renderer.render(scene, camera);
}
animate();

// 8. Handle window resizing
window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})