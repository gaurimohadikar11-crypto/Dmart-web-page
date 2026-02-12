function addTodo() {
  let input = document.getElementById("todoInput");
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <span class="delete" onclick="deleteTodo(this)">X</span>
  `;

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

function deleteTodo(element) {
  element.parentElement.remove();
}