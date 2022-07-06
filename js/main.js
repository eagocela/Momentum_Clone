// VARIABLES

//STORAGE DECLARATION

const myStorage = window.localStorage;
const storedName = myStorage.getItem("names");

//WELCOME PAGE

const centerWrapper = document.querySelector(".wrapper-center");
const welcomeContainer = document.querySelector(".container-welcome");
const nameInput = document.getElementById("input-name");
const userName = document.querySelector("#userName");
const editNameButton = document.querySelector("#button-editName");
var user;
const resetConfirmationMessage = document.querySelector(
  "#reset-confirmation-message"
);

//FOCUS

const focusContainer = document.querySelector(".container-focus");
const focusInput = document.querySelector("#focus-input");
const focusDisplay = document.querySelector(".focus-display");
const focus = document.querySelector("#focus");
const editFocusButton = document.querySelector("#editFocusButton");
const affirm = document.querySelector("affirm");

//PRODUCTIVITY QUOTE

const quotesList = [
  ["Focus on being productive instead of busy.", "-Tim Ferriss"],
  [
    "Do the hard jobs first. The easy jobs will take care of themselves.",
    "- Dale Carnegie",
  ],
  [
    "Productivity is being able to do things that you were never able to do before.",
    "- Franz Kafka",
  ],
  [
    "It’s not always that we need to do more but rather that we need to focus on less.",
    "- Nathan W. Morris",
  ],
  [
    "My goal is no longer to get more done, but rather to have less to do.",
    "- Francine Jay",
  ],
  [
    "You can fool everyone else, but you can’t fool your own mind.",
    "- David Allen",
  ],
  ["You miss 100% of the shots you don’t take.", "-Wayne Gretzky"],
  [
    "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.",
    "- Leo Babauta",
  ],
  ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
  [
    "Sometimes, things may not go your way, but the effort should be there every single night.",
    "- Michael Jordan",
  ],
  [
    "The tragedy in life doesn’t lie in not reaching your goal. The tragedy lies in having no goal to reach.",
    "- Benjamin E. Mays",
  ],
  [
    "If you spend too much time thinking about a thing, you’ll never get it done.",
    "- Bruce Lee",
  ],
  ["Until we can manage time, we can manage nothing else.", "- Peter Drucker"],
];

const prodQuoteContainer = document.querySelector(".container-quotes");
const prodQuote = document.querySelector("#prodQuote");

const generateQuoteButton = document.querySelector("#button-generateQuote");
const addQuoteButton = document.querySelector("#button-addQuote");

//RESET

const resetContainer = document.querySelector("#container-reset");
const resetButton = document.querySelector("#button-reset");
const resetButtonYes = document.querySelector("#button-reset-yes");
const resetButtonNo = document.querySelector("#button-reset-no");

//EVENT LISTENERS

editFocusButton.addEventListener("click", showFocusInputField);
editNameButton.addEventListener("click", editName);
generateQuoteButton.addEventListener("click", displayRandomProdQuote);
addQuoteButton.addEventListener("click", addQuote);
resetButton.addEventListener("click", displayResetConfirmation);
resetButtonNo.addEventListener("click", displayResetConfirmation);

// FUNCTIONS

// WELCOME PAGE

nameInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && nameInput.value.trim() !== "") {
    welcomeContainer.classList.add("hide");
    user = nameInput.value;
    userName.innerHTML = user;
    centerWrapper.classList.remove("hide"); //displays center content after entering name
  }
});

//EDIT USERNAME

function editName() {
  userName.contentEditable = "true";
  userName.focus();
}
//fetch username
userName.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    userName.contentEditable = "false";
    user = userName.textContent;
    userName.innerHTML = user;
  }
});

//PRODUCTIVITY QUOTE

function displayRandomProdQuote() {
  const random = Math.floor(Math.random() * quotesList.length);
  prodQuote.innerHTML = quotesList[random][0];
}
displayRandomProdQuote();

function addQuote() {
  prodQuote.contentEditable = "true";
  prodQuote.innerHTML = "";
  prodQuote.focus();
}
prodQuote.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    prodQuote.contentEditable = "false";
    quotesList.push(prodQuote.textContent);
    prodQuote.innerHTML = quotesList.pop();
  }
});

// FOCUS FUNCTION

function showFocusInputField() {
  focus.classList.remove("linethrough");
  focusContainer.classList.remove("hide");
  focusDisplay.classList.add("hide");
  prodQuoteContainer.classList.add("hide");
}
var focusSquare;
focusInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && focusInput.value !== "") {
    focusContainer.classList.add("hide");
    focusDisplay.classList.remove("hide");
    prodQuoteContainer.classList.remove("hide");
    focus.innerHTML =
      '<label class="checkbox"><input type="checkbox" id="focusCheck"><span class="focusSquare"></span></label>' +
      "   " +
      focusInput.value;
    focusInput.value = "";
    focusSquare = document.querySelector(".focusSquare");
    focusSquare.addEventListener("click", linethroughFocus);
  }
});

function linethroughFocus() {
  focus.classList.toggle("linethrough");
}

//RESET FUNCTION

function displayResetConfirmation() {
  if (resetContainer.classList.contains("hide")) {
    resetConfirmationMessage.innerHTML =
      "Are you sure you want to reset, " + user + "?";
    resetContainer.classList.remove("hide");
  } else {
    resetContainer.classList.add("hide");
  }
}

resetButtonYes.onclick = function refreshPage() {
  window.location.reload();
  myStorage.clear();
};

//END
