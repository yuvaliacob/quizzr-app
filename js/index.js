// TOGGLE BOOKMARK BUTTON //

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

const bookmarkImage = document.querySelector('[data-js="bookmark-image"]');

bookmarkButton.addEventListener("click", toggleBookmarkButton);

function toggleBookmarkButton(e) {
  e.target.src == "./resources/bookmark_filled.png"
    ? (e.target.src = "./resources/bookmark.png") // true
    : (e.target.src = "./resources/bookmark_filled.png"); // false
}

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
