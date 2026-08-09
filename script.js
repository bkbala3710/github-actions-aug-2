let score = 0;

const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");
const restart = document.getElementById("restart");

function moveTarget() {
  const maxX = gameArea.clientWidth - target.offsetWidth;
  const maxY = gameArea.clientHeight - target.offsetHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

target.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

restart.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = score;
  moveTarget();
});

moveTarget();