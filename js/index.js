const answerSection = document.querySelector('[data-js="answer"]');

const buttonShowAnswer = document.querySelector(
  '[data-js="show-answer-button"]'
);

function toggleAnswerButton(e) {
  e.target.textContent == "Hide Answer"
    ? (e.target.textContent = "Show Answer")
    : (e.target.textContent = "Hide Answer");
}

buttonShowAnswer.addEventListener("click", toggleAnswerButton);

buttonShowAnswer.addEventListener("click", () => {
  answerSection.classList.toggle("hidden");
});
