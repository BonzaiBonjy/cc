// Initialize an empty array to hold the to-dos
const todos = [];
const inProgressList = document.getElementById("in-progress-list");
const completedList = document.getElementById("completed-list");

// Function to add a new to-do to the list
function addTodo(event) {
  event.preventDefault();
  const todoInput = document.getElementById("todo-input");
  const todoDate = document.getElementById("todo-date");

  // Check if the user has entered both a todo and a due date
  if (todoInput.value !== "" && todoDate.value !== "") {
    // Create a new todo object with the input values and add it to the todos array
    const newTodo = { text: todoInput.value, date: todoDate.value, completed: false };
    todos.push(newTodo);

    // Clear the input fields and update the list of todos on the page
    event.target.reset();

    updateTodoLists();
  }
}

const form = document.getElementById('add-todo-form');
form.addEventListener('submit', addTodo);


function createTodoElement (todo, index) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${todo.text} (due: ${todo.date})`;

    // Add a button to delete the todo
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => {
      deleteTodo(index);
    };

    // Add a button to mark the todo as completed or in-progress
    const statusButton = document.createElement("button");
    statusButton.innerHTML = todo.completed ? "In Progress" : "Complete";
    statusButton.onclick = () => {
      toggleTodoStatus(index);
    };

    // Append the list item, delete button, and status button to the appropriate list
    listItem.appendChild(deleteButton);
    listItem.appendChild(statusButton);
    if (todo.completed) {
      completedList.appendChild(listItem);
    } else {
      inProgressList.appendChild(listItem);
    }
}


// Function to update the lists of todos on the page
function updateTodoLists() {
  // Clear the current lists of todos
  inProgressList.innerHTML = "";
  completedList.innerHTML = "";

  // Loop through the todos array and create a new list item for each one
  todos.forEach(createTodoElement);
}

// Function to delete a todo from the list
function deleteTodo(index) {
  // Remove the todo at the given index from the todos array
  todos.splice(index, 1);

  // Update the lists of todos on the page
  updateTodoLists();
}

// Function to toggle the status of a todo between completed and in-progress
function toggleTodoStatus(index) {
  // Update the completed property of the todo at the given index
  todos[index].completed = !todos[index].completed;

  // Update the lists of todos on the page
  updateTodoLists();
}

