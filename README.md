# Assignment 4 – Dynamic Task Dashboard

A task dashboard built with vanilla JavaScript (no frameworks or libraries).
Tasks are loaded from a simulated server, rendered to the DOM, and can be
toggled or deleted. Open `index.html` in a browser and click **Load Tasks**.

## File Organization

- `index.html`: page structure (heading, `loadTasksBtn`, `statusMessage`, `taskList`)
- `styles.css`: minimal styling, including line-through for completed tasks
- `api.js`: `fetchTasks()` returns a Promise and resolves after 1500ms with the raw task data
- `taskManager.js`: the `Task` class (read-only `id`, `toggle()` returns a new task) and the `TaskManager` class (`setTasks`, `addTask`, `removeTask`, `toggleTask`), which never mutate the existing array
- `main.js`: connects everything: loads tasks with `async/await` and `try/catch`, converts the data with `JSON.stringify` / `JSON.parse`, renders with `createElement` / `appendChild`, and handles Toggle and Delete with `addEventListener`
