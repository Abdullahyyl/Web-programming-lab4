// Simulated server request.
// Returns a Promise that resolves with raw task data after 1500ms.
function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Study JavaScript", completed: false },
        { id: 2, title: "Practice DOM", completed: true },
        { id: 3, title: "Read Async Patterns", completed: false }
      ]);
    }, 1500);
  });
}
