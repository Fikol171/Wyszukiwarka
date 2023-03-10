const search = document.querySelector(".js-search");
const listItems = document.querySelectorAll(".js-listItem");

const searchEngine = (event) => {
  const text = event.target.value.toLowerCase();

  listItems.forEach((listItem) => {
    listItem.textContent.toLowerCase().indexOf(text) !== -1
      ? (listItem.style.diplay = "block")
      : (listItem.style.display = "none");
  });
};
search.addEventListener("keyup", searchEngine);
