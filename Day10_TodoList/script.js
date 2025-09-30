const task = document.getElementById("task");
task.placeholder = "Add a new task";
const addTaskBtn = document.querySelector("#add-task-btn")
const container = document.querySelector('#container');

function addTask() {
        if (task.value.trim() === "") return;
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = "task-" + Date.now();
        checkBox.addEventListener('change', () => {
                label.classList.toggle('completed');
        });
        let label = document.createElement('label');
        label.htmlFor = checkBox.id;
        label.textContent = task.value
        let newTask = document.createElement('div');
        newTask.id = checkBox.id;
        let deleteBtn = document.createElement('button');
        deleteBtn.id = checkBox.id;
        deleteBtn.textContent = "🗑️";
        deleteBtn.addEventListener('click', () => {
                newTask.remove();
        });
        let newSec = document.createElement('section');
        newSec.appendChild(checkBox)
        newSec.appendChild(label);
        newTask.appendChild(newSec);
        newTask.appendChild(deleteBtn);
        container.appendChild(newTask);
        task.value = '';
}
addTaskBtn.addEventListener('click', addTask);
task.addEventListener('keypress', (e) => {
        if (e.key === "Enter") addTask()
})
