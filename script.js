const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

// Create Snowflakes
function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 1
    });
  }
}

// Draw Snowflakes
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (let i = 0; i < snowflakes.length; i++) {
    const sf = snowflakes[i];
    ctx.moveTo(sf.x, sf.y);
    ctx.arc(sf.x, sf.y, sf.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnowflakes();
}

// Move Snowflakes
function moveSnowflakes() {
  for (let i = 0; i < snowflakes.length; i++) {
    const sf = snowflakes[i];
    sf.y += Math.pow(sf.d, 2) + 1;
    if (sf.y > canvas.height) {
      sf.y = 0;
      sf.x = Math.random() * canvas.width;
    }
  }
}

// Animate
function animate() {
  drawSnowflakes();
  requestAnimationFrame(animate);
}

createSnowflakes();
animate();
