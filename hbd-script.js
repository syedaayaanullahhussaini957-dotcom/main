window.onload = () => {
  document.body.classList.add("loaded");
};

function smoothRedirect(url) {
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
}

const BIRTH_DATE = new Date(2007, 5, 4);
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const gardenCanvas = document.getElementById("garden");
const ctx = gardenCanvas.getContext("2d");

startBtn.onclick = () => {
  document.getElementById("clickMe").style.display = "none";
  document.getElementById("content").style.display = "block";
  gardenCanvas.width = 670;
  gardenCanvas.height = 625;
  startHeartAnimation();
  updateTimer();
  setInterval(updateTimer, 1000);

  setTimeout(() => nextBtn.style.display = "inline-block", 4000);
};

nextBtn.onclick = () => {
  window.location.href = "love.html";
};

function updateTimer() {
  const now = new Date();
  let diff = now - BIRTH_DATE;
  document.getElementById("days").innerText = Math.floor(diff / 86400000);
  document.getElementById("hours").innerText = Math.floor(diff / 3600000) % 24;
  document.getElementById("minutes").innerText = Math.floor(diff / 60000) % 60;
}

/* HEART ANIMATION – unchanged */
function startHeartAnimation() {
  let petals = [];
  const heartPoints = [];
  for (let i = 10; i < 30; i += 0.2) {
    let t = i / Math.PI;
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t);
    heartPoints.push([x * 15 + 335, -y * 15 + 280]);
  }
  function draw() {
    if (petals.length < 300) {
      const p = heartPoints[Math.floor(Math.random() * heartPoints.length)];
      petals.push({ x: p[0], y: p[1], r: Math.random() * 3 });
    }
    ctx.clearRect(0, 0, 670, 625);
    petals.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = "#ff6b81";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
