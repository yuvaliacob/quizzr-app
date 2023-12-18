console.clear();
const MAX_CHARACTERS = 150;

const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="new-question"]');

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
