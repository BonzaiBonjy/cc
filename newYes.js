const form = document.getElementById('add-todo-form');
const todos = [];

function addTodo(event) {
    event.preventDefault();
    const todo = document.getElementById('todo-input');
    const dueDate = document.getElementById('todo-date');
    todos.push({
        text: todo.value,
        dueDate: dueDate.value,
        completed: false
    });
    event.target.reset();
}











form.addEventListener('submit', addTodo);