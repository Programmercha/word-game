const random_input = document.querySelector("#random-input");
const inputEl = document.querySelector("#user-word");
const score = document.querySelector("#score");
const timeEl = document.querySelector("#time");
const modal = document.getElementById("openModal");
const btn = document.getElementById("btn");
const ball = document.getElementById("ball");

// input Focus
function realod() {
  inputEl.focus();

  let word;
  let userTime = 10;
  let userScore = 0;

  const changeword = () => {
    const a = Math.floor(Math.random() * (words.length - 1)) + 1;
    word = words[a];
    random_input.innerHTML = `${word}`;
  };

  changeword();

  inputEl.addEventListener("input", () => {
    const userword = inputEl.value;
    if (userword == word) {
      changeword();
      inputEl.value = "";
      userScore += 1;
      userTime += 3;
      score.textContent = `${userScore}`;
    }
  });

  const timeInterval = setInterval(() => {
    if (userTime > 0) {
      userTime--;
      timeEl.textContent = `${userTime}s`;
    } else {
      ball.textContent = `${userScore}`;
      openModal();
      clearInterval(timeInterval);
    }
  }, 1000);
}

realod();
btn.addEventListener("click", () => {
  closeModal();
  userScore = 0;
  inputEl.value = "";
  score.textContent = `${userScore}`;
  realod();
});

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
