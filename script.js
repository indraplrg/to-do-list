let list = {};
const SaveList = "SaveList";

// Dom
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todo = document.querySelector(".todo");

function saveData(command, item, status = false) {
  switch (command) {
    case "ADD":
    case "UPDATE":
      list[item] = status;
      break;
    case "DELETE":
      delete list[item];
      break;
    default:
      break;
  }

  localStorage.setItem(SaveList, JSON.stringify(list));
  return;
}

// Check
if ((todoFromLocal = localStorage.getItem(SaveList))) {
  list = JSON.parse(todoFromLocal);

  for (let key in list) {
    createList(key, list[key]);
  }
}

// Add List
btn.addEventListener("click", function () {
  if (input.value !== "") {
    saveData("ADD", input.value);
    createList(input.value);

    // Restart Field
    input.value = "";
  }
});

function createList(text, status = false) {
  let ifDone = status ? "line-through" : "";
  let li = `<li class='list-style ${ifDone}' onclick='done(this)'><span>${text}</span><span class='delButton' onclick="remove(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span></li>`;

  todo.insertAdjacentHTML("afterbegin", li);
}

// Done List
function done(el) {
  let status = el.classList.toggle("line-through");
  saveData("UPDATE", el.innerText, status);
}

// Remove List
function remove(el) {
  el.parentElement.remove();
  saveData("DELETE", el.previousElementSibling.innerText.trim());
}
