console.clear();

// FORM DATA //

const MAX_CHARACTERS = 150;

const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');

const characterLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log("formData: ", formData);

  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  event.target.reset();

  console.log("Press submit");
});

questionInput.addEventListener("input", (e) => {
  console.log("Press");
  console.log("What I type: ", e.target.value.length);
  characterLeftElement.textContent =
    MAX_CHARACTERS - parseInt(e.target.value.length);
});

// CARD CREATION //

const main = document.querySelector('[data-js="main"]');

const cardContainer = document.createElement("section");
cardContainer.classList.add("card");
main.appendChild(cardContainer);

const questionContainer = document.createElement("section");
questionContainer.classList.add("question");
cardContainer.append(questionContainer);

const questionContent = document.createElement("h3");
questionContent.classList.add("card__question");
questionContent.textContent = "***QUESTION***";
questionContainer.append(questionContent);

const theAnswerButton = document.createElement("button");
theAnswerButton.classList.add("card__button");
theAnswerButton.textContent = "Show Answer";
theAnswerButton.id = "show-answer-button";
questionContainer.append(theAnswerButton);

const answerContainer = document.createElement("section");
answerContainer.classList.add("hidden"); // HIDDEN
answerContainer.id = "hiddenanswer";
cardContainer.append(answerContainer);

const answerContent = document.createElement("h3");
answerContent.classList.add("card__answer");
answerContent.textContent = "***ANSWER***";
answerContainer.append(answerContent);

const hashtagContainer = document.createElement("ul");
hashtagContainer.classList.add("card__hashtags-list");
cardContainer.append(hashtagContainer);

const hashtagContent = document.createElement("li");
hashtagContent.classList.add("card__hashtag");
hashtagContent.textContent = "***TAG***";
hashtagContainer.append(hashtagContent);

// TOGGLE ANSWER BUTTON //

const answerSection = document.querySelector("#hiddenanswer");

const buttonShowAnswer = document.querySelector("#show-answer-button");

function toggleAnswerButton(e) {
  e.target.textContent == "Hide Answer"
    ? (e.target.textContent = "Show Answer") // true
    : (e.target.textContent = "Hide Answer"); // false
}

buttonShowAnswer.addEventListener("click", toggleAnswerButton);

buttonShowAnswer.addEventListener("click", () => {
  answerSection.classList.toggle("hidden");
});
