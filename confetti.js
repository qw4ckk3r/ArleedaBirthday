
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 150; // Number of confetti pieces
const colors = ["#FFD700", "#FF69B4", "#87CEFA", "#32CD32", "#FFA500"]; // Confetti colors

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size when window is resized
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Confetti particle class
class Confetti {
  constructor(x, y, r, color, speed) {
    this.x = x; // X-position
    this.y = y; // Y-position
    this.r = r; // Radius (size)
    this.color = color; // Particle color
    this.speed = speed; // Falling speed
    this.opacity = Math.random() * 0.8 + 0.2; // Sparkly transparency
    this.rotation = Math.random() * 360; // Random rotation
  }

  update() {
    this.y += this.speed; // Move down
    this.rotation += this.speed; // Rotate while falling

    // Reset confetti bila keluar page
    if (this.y > canvas.height) {
      this.y = -10;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity; // Transparency
    ctx.translate(this.x, this.y); // Positioning
    ctx.rotate((this.rotation * Math.PI) / 180); // Rotate confetti
    ctx.fillStyle = this.color; // warnakan dia
    ctx.beginPath();
    ctx.arc(0, 0, this.r, 0, 2 * Math.PI); // lukis confetti
    ctx.fill();
    ctx.restore();
  }
}

// Initialize confetti 
for (let i = 0; i < particleCount; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const r = Math.random() * 5 + 2; //size confetti
  const color = colors[Math.floor(Math.random() * colors.length)];
  const speed = Math.random() * 2 + 1; // Falling speed
  particles.push(new Confetti(x, y, r, color, speed));
}

// Loop Confetti
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  particles.forEach((particle) => {
    particle.update(); // Update position
    particle.draw(); //particle
  });
  requestAnimationFrame(animate); // Keep animating
}

// start animation
animate();

//flip button
document.getElementById("flipButtonfront").addEventListener("click", function() {
  document.querySelector(".flip-card-inner").classList.toggle("flipped");
});

document.getElementById("flipButtonback").addEventListener("click", function() {
  document.querySelector(".flip-card-inner").classList.toggle("flipped");
});
