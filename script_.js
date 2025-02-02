// สร้างฉาก กล้อง และ renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// เพิ่มแสงให้หัวใจเห็นชัดขึ้น
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// สร้างรูปหัวใจ
const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.bezierCurveTo(-1, 1, -1, 3, 0, 4);
shape.bezierCurveTo(1, 3, 1, 1, 0, 0);
const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true });

// ใช้ Phong Material เพื่อให้มีแสงเงา
const material = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100 });
const heart = new THREE.Mesh(geometry, material);
scene.add(heart);

// ตั้งตำแหน่งกล้องให้เห็นหัวใจ
camera.position.z = 5;

// ทำให้หัวใจหมุน
function animate() {
    requestAnimationFrame(animate);
    heart.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// ปรับขนาดเมื่อหน้าจอเปลี่ยน
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
