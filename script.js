// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('sladeCanvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a 3D Object (a mask or a sword for Slade)
const geometry = new THREE.IcosahedronGeometry(1, 1); // Placeholder, you can use any 3D model
const material = new THREE.MeshStandardMaterial({ color: 0xff4c4c, wireframe: true });
const sladeObject = new THREE.Mesh(geometry, material);
scene.add(sladeObject);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate object for cool effect
    sladeObject.rotation.x += 0.01;
    sladeObject.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Handle screen resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Start the animation loop
animate();
