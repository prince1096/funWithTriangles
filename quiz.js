const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#button");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°", "right angle"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  console.log(formResults);

  for (let value of formResults.values()) {
    console.log(value);

    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  outputEl.innerText = "Your Score is " + score;
}

submitButton.addEventListener("click", calculateScore);
