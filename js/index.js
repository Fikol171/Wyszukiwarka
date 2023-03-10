{
  const search = document.querySelector(".js-search");
  const listItems = document.querySelectorAll(".js-listItem");

  const onInputAction = () => {
    listItems.forEach((listItem) => {
      const match = new RegExp(search.value, "i").test(listItem.textContent);
      match
        ? (listItem.style.diplay = "block")
        : (listItem.style.display = "none");
    });
  };
 
  const init = () => {
    search.addEventListener("keyup", onInputAction);
    onInputAction();
  };
  init();
}
