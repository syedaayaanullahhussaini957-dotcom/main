window.onload = () => {
  document.body.classList.add("loaded");
};

function smoothRedirect(url) {
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
}

window.onload = () => {
  document.body.classList.add("loaded");
};

function smoothRedirect(url) {
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
}

// Mobile-safe button click
const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    smoothRedirect("final.html");
  });
}

/* ===== YOUR EXISTING DRAG CODE (UNCHANGED) ===== */

let highestZ = 1;

class Paper {
  holdingPaper = false;
  startX = 0;
  startY = 0;
  prevX = 0;
  prevY = 0;
  currentX = 0;
  currentY = 0;
  rotation = Math.random() * 30 - 15;

  init(paper) {
    const start = (x, y) => {
      this.holdingPaper = true;
      paper.style.zIndex = highestZ++;
      this.prevX = x;
      this.prevY = y;
    };

    const move = (x, y) => {
      if (!this.holdingPaper) return;
      const dx = x - this.prevX;
      const dy = y - this.prevY;
      this.currentX += dx;
      this.currentY += dy;
      this.prevX = x;
      this.prevY = y;

      paper.style.transform =
        `translate(${this.currentX}px, ${this.currentY}px) rotate(${this.rotation}deg)`;
    };

    const end = () => this.holdingPaper = false;

    paper.addEventListener("mousedown", e => start(e.clientX, e.clientY));
    document.addEventListener("mousemove", e => move(e.clientX, e.clientY));
    document.addEventListener("mouseup", end);

    paper.addEventListener("touchstart", e => {
      start(e.touches[0].clientX, e.touches[0].clientY);
    });

    document.addEventListener("touchmove", e => {
      move(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });

    document.addEventListener("touchend", end);
  }
}

document.querySelectorAll(".paper").forEach(paper => {
  new Paper().init(paper);
});
const finalPaper = document.getElementById("finalPaper");

if (finalPaper) {
  finalPaper.addEventListener("click", () => {
    smoothRedirect("final.html");
  });

  finalPaper.addEventListener("touchstart", () => {
    smoothRedirect("final.html");
  });
}
