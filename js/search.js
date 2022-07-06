//VARIABLES

const GOOGLE_BASE_URL = "https://google.com/search?q="; //search engine

const searchForm = document.getElementById("search_form");
const searchInput = searchForm.querySelector("input");

const handleSearch = (event) => {
  event.preventDefault();

  const searchURL = GOOGLE_BASE_URL + searchInput.value;
  window.open(searchURL, "_blank"); //open search in new window

  searchInput.value = "";
};

searchForm.addEventListener("submit", handleSearch);
