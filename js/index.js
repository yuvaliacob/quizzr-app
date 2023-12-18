// TOGGLE BOOKMARK BUTTON //

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

function toggleBookmarkButton(e) {
  e.target.src ==
  "https://yuvaliacob.github.io/yuval-quiz-app/resources/bookmark.png"
    ? (e.target.src =
        "https://yuvaliacob.github.io/yuval-quiz-app/resources/bookmark_filled.png") // true
    : (e.target.src =
        "https://yuvaliacob.github.io/yuval-quiz-app/resources/bookmark.png"); // false
}
bookmarkButton.addEventListener("click", toggleBookmarkButton);

// TOGGLE ANSWER //

const answerSection = document.querySelector('[data-js="answer"]');

const buttonShowAnswer = document.querySelector(
  '[data-js="show-answer-button"]'
);

function toggleAnswerButton(e) {
  e.target.textContent == "Hide Answer"
    ? (e.target.textContent = "Show Answer") // true
    : (e.target.textContent = "Hide Answer"); // false
}

buttonShowAnswer.addEventListener("click", toggleAnswerButton);

buttonShowAnswer.addEventListener("click", () => {
  answerSection.classList.toggle("hidden");
});
