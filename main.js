const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

const taskManager = new TaskManager();

function renderTasks() {
  taskList.textContent = "";

  taskManager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);
  });
}

async function loadTasks() {
  statusMessage.textContent = "Loading tasks...";

  try {
    const rawTasks = await fetchTasks();

    const json = JSON.stringify(rawTasks);
    const parsedTasks = JSON.parse(json);

    const tasks = parsedTasks.map(
      (item) => new Task(item.id, item.title, item.completed),
    );

    taskManager.setTasks(tasks);
    renderTasks();
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Error: could not load tasks. " + error.message;
  }
}

loadTasksBtn.addEventListener("click", loadTasks);
