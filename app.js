const title = document.getElementById("title");
const easyMode = document.getElementById("easy");
const hardMode = document.getElementById("hard");
const guessForm = document.getElementById("guessForm");
const gameForm = document.getElementById("gameForm");
const input = document.getElementById("guessInput");
const up = document.getElementById("Up");
const upSpan = document.querySelector("#Up span");
const down = document.getElementById("Down");
const downSpan = document.querySelector("#Down span");
const result = document.getElementById("result");
const retryBtn = document.getElementById("retry");

const playHandler = (event) => {
  easyMode.style.display = "none";
  hardMode.style.display = "none";
  gameForm.style.display = "block";
  if (event.target.innerText === "Easy") {
    return (number = Math.round(Math.random() * 100));
  } else {
    return (number = Math.round(Math.random() * 10000));
  }
};

const submitHandler = (event) => {
  event.preventDefault();
  console.log(number);
  let inputContainer = Number(input.value);
  input.value = "";

  if (inputContainer === number) {
    gameForm.style.display = "none";
    title.style.display = "none";
    result.style.display = "block";
    retryBtn.style.display = "block";
  } else if (inputContainer > number) {
    upSpan.style.opacity = "0";
    up.style.color = "gray";
    downSpan.style.opacity = "1";
    down.style.color = "black";
  } else if (inputContainer < number) {
    downSpan.style.opacity = "0";
    down.style.color = "gray";
    upSpan.style.opacity = "1";
    up.style.color = "black";
  }
};

const retryHandler = () => {
  result.style.display = "none";
  retryBtn.style.display = "none";
  title.style.display = "block";
  easyMode.style.display = "inline-block";
  hardMode.style.display = "inline-block";

  up.style.color = "gray";
  down.style.color = "gray";
  upSpan.style.opacity = "0";
  downSpan.style.opacity = "0";
};

easyMode.addEventListener("click", playHandler);
hardMode.addEventListener("click", playHandler);
guessForm.addEventListener("submit", submitHandler);
retryBtn.addEventListener("click", retryHandler);
