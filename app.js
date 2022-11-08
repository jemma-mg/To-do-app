const addButton = document.getElementById("add");
const task_list = document.getElementById("task-list")
let tasks = [];

// Fuction Definitions

function display() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
  tasks = [];
  } else {
  tasks = JSON.parse(todo);
  } 
  let html = "";
  tasks.forEach((list, ind) => {
  html += `<div class='flex mb-4 items-center'>
  <p class='w-full text-grey-darkest'>${list}</p>
  <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
  <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
  </div>`;
  });
  task_list.innerHTML = html;
  console.log(tasks)
}

function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  tasks.splice(ind, 1);
  tasks = JSON.parse(todo);
  localStorage.setItem("todo", JSON.stringify(tasks));
  display();
}

function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem("todo");
  tasks = JSON.parse(todo);
  add_text.value = tasks[ind];
  addButton.style.display = "none";
  saveTaskButton.style.display = "block";
 }

// Event Listners

addButton.addEventListener("click", (e) => { 
        e.preventDefault();
        let todo = localStorage.getItem("todo");
        if (todo === null) {
        tasks = [];
        } else {
        tasks = JSON.parse(todo);
        }
        //adding input text to tasks array
        tasks.push(add_text.value); 
        //clearing the input field
        add_text.value = "";
        //adding to JS local storage
        localStorage.setItem("todo", JSON.stringify(tasks));
        display();
   });

saveTaskButton.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  tasks = JSON.parse(todo);
  let id = saveInd.value;
  tasks[id] = add_text.value;
  addButton.style.display = "block";
  saveTaskButton.style.display = "none";
  add_text.value = "";
  localStorage.setItem("todo", JSON.stringify(tasks));
  displayTodo();
 });