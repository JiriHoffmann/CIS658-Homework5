let form = document.getElementById("bugForm");
let titleError = document.getElementById("titleError");
let descriptionError = document.getElementById("descriptionError");
form.addEventListener("submit", event => {
  titleError.textContent = "";
  let titleText = document.getElementsByName("bug[title]")[0].value;
  let descriptionText = document.getElementsByName("bug[description]")[0].value;
  if (titleText.length < 10) {
    titleError.innerHTML = "Title is not long enough.";
    titleError.classList.remove("invisible");
    event.preventDefault();
  } else {
    titleError.classList.add("invisible");
  }
  if (descriptionText.length < 20) {
    descriptionError.innerHTML = "Description is not long enough.";
    descriptionError.classList.remove("invisible");
    event.preventDefault();
  } else {
    descriptionError.classList.add("invisible");
  }
});
