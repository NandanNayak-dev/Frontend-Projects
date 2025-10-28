// Simple To-Do app using localStorage for persistence
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const countEl = document.getElementById("count");

let todos = [];

function load() {
  try {
    const raw = localStorage.getItem("todos");
    todos = raw ? JSON.parse(raw) : [];
  } catch (e) {
    todos = [];
    console.error("Failed to load todos", e);
  }
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";
  if (todos.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No tasks yet — add something!";
    list.appendChild(empty);
  } else {
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = "todo-item";

      const del = document.createElement("button");
      del.className = "delete-btn";
      del.textContent = "Delete";
      del.addEventListener("click", () => {
        todos = todos.filter((t) => t.id !== todo.id);
        save();
        render();
      });

      const span = document.createElement("span");
      span.className = "todo-text";
      span.textContent = todo.text;

      // delete button first then text
      li.appendChild(del);
      li.appendChild(span);
      list.appendChild(li);
    });
  }
  const total = todos.length;
  countEl.textContent = `${total} item${total !== 1 ? "s" : ""}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const todo = { id: Date.now().toString(), text };
  todos.unshift(todo);
  save();
  render();
  input.value = "";
  input.focus();
});

// init
load();
render();
