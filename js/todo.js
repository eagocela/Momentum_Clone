//VARIABLES

const todoContainer = document.querySelector(".container-toDoList");
const closeToDoListButton = document.querySelector(".closeToDoListButton");
const toDoListButton = document.querySelector("#button-toDoList");
const inputFieldItem = document.querySelector("#input-toDoItem");
const addButton = document.querySelector("#addToDoButton");
const toDoList = document.querySelector(".toDo-List");

//EVENT LISTENERS

addButton.addEventListener("click", addToDo);
toDoListButton.addEventListener("click", displayToDoList);
closeToDoListButton.addEventListener("click", displayToDoList);
inputFieldItem.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addToDo();
    inputFieldItem.value = "";
  }
});
toDoList.addEventListener("click", deleteCompleteTask);

//FUNCTIONS
function addToDo() {
  if (inputFieldItem.value.trim() != "") {
    event.preventDefault();
    const toDoLi = document.createElement("li");

    const toDoItemDiv = document.createElement("div");
    toDoItemDiv.classList.add("toDoItem");
    toDoLi.appendChild(toDoItemDiv);

    const pTag = document.createElement("p");
    pTag.innerHTML = inputFieldItem.value;
    toDoItemDiv.appendChild(pTag);

    const checkButton = document.createElement("button");
    checkButton.classList.add("circle-check");

    const trashButton = document.createElement("button");
    trashButton.classList.add("delete");

    checkButton.innerHTML = '<i class="fas fa-circle-check"></i>';
    trashButton.innerHTML = '<i class="fas fa-trash-can"></i>';

    toDoItemDiv.appendChild(checkButton);
    toDoItemDiv.appendChild(trashButton);

    toDoList.appendChild(toDoLi);
    inputFieldItem.value = "";
  }
}

function deleteCompleteTask(e) {
  const targetTask = e.target;

  if (
    targetTask.classList[1] === "fa-trash-can" ||
    targetTask.classList[0] === "trash"
  ) {
    targetTask.parentElement.parentElement.remove();
  }

  if (
    targetTask.classList[1] === "fa-circle-check" ||
    targetTask.classList[0] === "delete"
  ) {
    targetTask.parentElement.parentElement.classList.toggle("linethrough");
  }
}

function displayToDoList() {
  if (todoContainer.classList.contains("hide")) {
    todoContainer.classList.remove("hide");
    toDoListButton.classList.add("active");
  } else {
    todoContainer.classList.add("hide");
    toDoListButton.classList.remove("active");
  }
}

todoContainer.addEventListener("mousedown", mousedown);
function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);
  let prevX = e.clientX;
  let prevY = e.clientY;
  function mousemove(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    const rect = todoContainer.getBoundingClientRect();
    todoContainer.style.left = rect.left - newX + "px";
    todoContainer.style.top = rect.top - newY + "px";
    prevX = e.clientX;
    prevY = e.clientY;
  }
  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}
