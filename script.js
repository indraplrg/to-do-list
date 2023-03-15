// Dom
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todo = document.querySelector(".todo");

// object
// todos = {};

// local storage
// function webstorage(execution, item, status = false) {
//   switch (execution) {
//     case "ADD":
//       todos.execution = item;
//       console.log(todos);
//   }
// };

// Add List
btn.addEventListener("click", function () {
  let li = `<li class='list-style' onclick='done(this)'><span>${input.value}</span><span class='delButton' onclick="remove(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></span></li>`;

  todo.insertAdjacentHTML("afterbegin", li);

  // webstorage('ADD',)

  // Restart Field
  input.value = "";
});

// Done List
function done(el) {
  el.classList.toggle("line-through");
}

// Remove List
function remove(el) {
  el.parentElement.remove();
}
