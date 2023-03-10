const search = document.querySelector(".js-search");
const listItems = document.querySelectorAll(".js-listItem");

const searchEngine = (event) => {
  const text = event.target.value.toLowerCase();

  listItems.forEach((listItem) => {
    if (listItem.textContent.toLowerCase().indexOf(text) !== -1) {
      listItem.style.diplay = "block";
    } else {
      listItem.style.display = "none";
    }
  });
};
search.addEventListener("keyup", searchEngine);
