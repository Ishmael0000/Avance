const gameArea = document.getElementById("gameArea");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 60;
let interval;

function getRandomPosition() {
  const x = Math.random() * (gameArea.clientWidth - 40);
  const y = Math.random() * (gameArea.clientHeight - 40);
  return { x, y };
}

function createTrash() {
  const trash = document.createElement("div");
  trash.classList.add("trash");

  const { x, y } = getRandomPosition();
  trash.style.left = `${x}px`;
  trash.style.top = `${y}px`;

  trash.addEventListener("click", () => {
    trash.remove();
    score++;
    scoreEl.textContent = `Basura recogida: ${score}`;
  });

  gameArea.appendChild(trash);
}

function startGame() {
  gameArea.innerHTML = "";
  score = 0;
  timeLeft = 60;
  scoreEl.textContent = `Basura recogida: ${score}`;
  timerEl.textContent = `Tiempo: ${timeLeft}`;
  clearInterval(interval);

  for (let i = 0; i < 10; i++) {
    createTrash();
  }

  interval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Tiempo: ${timeLeft}`;
    if (Math.random() < 0.3) {
      createTrash();
    }
    if (timeLeft <= 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  if (score >= 10) {
    alert("¡Felicidades! ¡Nivel superado!");
  } else {
    alert("¡Tiempo agotado! No alcanzaste el mínimo de basuritas.");
  }
}

startBtn.addEventListener("click", startGame);
