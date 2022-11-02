const addButton = document.getElementById("add");
let tasks = [];

addButton.addEventListener("click", 
    (e) => { 
        e.preventDefault();
        let todo = localStorage.getItem("todo");
        if (todo === null) {
        tasks = [];
        } else {
        tasks = JSON.parse(todo);
        }
        //adding input text to tasks array
        tasks.push(text.value); 
        //clearing the input field
        text.value = "";
        //adding to JS local storage
        localStorage.setItem("todo", JSON.stringify(tasks));
        display();
   });

   function display() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
   }