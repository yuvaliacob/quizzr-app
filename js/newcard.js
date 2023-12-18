console.clear();

// CHARACTER COUNTER //

const MAX_CHARACTERS = 150;

const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("input", function () {
    const count = textarea.nextElementSibling;

    count.textContent =
      MAX_CHARACTERS - parseInt(textarea.value.length) + " characters left";
  });
});

// FORM DATA PROCESSING//

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  // Prevent default browser behavior
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log("formData: ", formData);

  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  const formElements = event.target.elements;

  console.log("Question input:", formElements.question.value);
  console.log("Answer input:", formElements.answer.value);
  console.log("Tag input:", formElements.tag.value);

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
  questionContent.textContent = formElements.question.value;
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
  answerContent.textContent = formElements.answer.value;
  answerContainer.append(answerContent);

  const hashtagContainer = document.createElement("ul");
  hashtagContainer.classList.add("card__hashtags-list");
  cardContainer.append(hashtagContainer);

  const hashtagContent = document.createElement("li");
  hashtagContent.classList.add("card__hashtag");
  hashtagContent.textContent = "#" + formElements.tag.value;
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

  // Reset input values
  event.target.reset();
});
