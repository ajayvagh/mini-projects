document.querySelector("#push").onclick = function () {
    let taskInput = document.querySelector("#newtask input");
    let taskValue = taskInput.value.trim();

    if (taskValue.length == 0) {
        alert("Please enter a Task");
        return;
    }

    // Create a new task div
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Create task text
    let taskText = document.createElement("span");
    taskText.textContent = taskValue;

    // Mark task as completed on click
    taskText.onclick = function () {
        taskDiv.classList.toggle("completed");
    };

    // Create delete button (dustbin icon)
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#128465;"; // Unicode for dustbin 🗑️
    deleteButton.classList.add("delete");

    // Remove task on delete button click
    deleteButton.onclick = function () {
        taskDiv.remove();
    };

    // Append elements
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteButton);

    // Insert at the top of the task list
    let taskContainer = document.querySelector("#tasks");
    taskContainer.prepend(taskDiv);

    // Clear input field
    taskInput.value = "";
};
