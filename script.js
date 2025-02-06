// สร้างฉาก กล้อง และ renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(400, 400);
document.getElementById("heart-container").appendChild(renderer.domElement);

// เพิ่มแสงให้หัวใจดูมีมิติ
const light = new THREE.PointLight(0xffffff, 1.5, 100);
light.position.set(3, 3, 5);
scene.add(light);

// สร้างรูปหัวใจ
const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.bezierCurveTo(-1, 1, -1, 3, 0, 4);
shape.bezierCurveTo(1, 3, 1, 1, 0, 0);
const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true });

const material = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100 });
const heart = new THREE.Mesh(geometry, material);
heart.scale.set(1.5, 1.5, 1.5); // ปรับขนาดหัวใจ
heart.position.set(0, -2, 0); // ขยับให้เห็นในจอ
scene.add(heart);

// ตั้งค่ากล้องให้มองเห็นหัวใจ
camera.position.set(0, 0, 5);
camera.lookAt(heart.position);

// ทำให้หัวใจหมุน
function animate() {
    requestAnimationFrame(animate);
    heart.rotation.y += 0.01; // หมุนหัวใจ
    renderer.render(scene, camera);
}
animate();
