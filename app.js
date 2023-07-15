const randomWorldEl = document.getElementById("random-word");
const inputEl = document.getElementById("user-word");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const userModalScore = document.getElementById("user-modal-score");
const modal = document.querySelector(".modal");
const resetButton = document.getElementById("reset-button");
const formEl = document.getElementById('user-info')
const modalUSerInfo = document.querySelector('.modal-user-info')
const userNameTitle = document.getElementById('user-name-title')
const newUser = document.getElementById('user-name')


// input focus
inputEl.focus();

let randomWorld;
let userScore = 0;
let userTime = 10;
let userName;

const changeWord = () => {
  const randomNumber = Math.trunc(Math.random() * words.length);
  randomWorld = words[randomNumber];
  randomWorldEl.textContent = randomWorld;
};


inputEl.addEventListener("input", () => {
  const userWord = inputEl.value;

  if (userWord == randomWorld) {
    changeWord();
    userScore++;
    userTime += 3;
    scoreEl.textContent = userScore;
    inputEl.value = "";
  }
});

function intervalFunction() {
  const timeInterval = setInterval(() => {
    if (userTime > 0) {
      userTime--;
      timeEl.textContent = `${userTime}s`;
    } else {
      clearInterval(timeInterval);
      userNameTitle.textContent = userName
      modal.classList.remove("hidden");
    }
  }, 1000);
}

resetButton.addEventListener("click", () => {
  userScore = 0;
  userTime = 10;
  changeWord();
  timeEl.textContent = "10s";
  scoreEl.textContent = '0  '
  modal.classList.add("hidden");
  intervalFunction()
});


formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  intervalFunction()
  changeWord();
  userName = newUser.value
  modalUSerInfo.classList.add('hidden')
})