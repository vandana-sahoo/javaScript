document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    li.textContent = taskText;
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.classList.add('removing');
        setTimeout(() => {
            taskList.removeChild(li);
        }, 500);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}