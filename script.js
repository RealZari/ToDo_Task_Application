// External JS File

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
}

function addTask() {
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDescription = document.getElementById("taskDescription").value;

  if (taskTitle && taskDescription) {
    const taskListContent = document.getElementById("taskListContent");

    //create task element
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `<h3>${taskTitle}</h3><p>${taskDescription}</p><button onclick="deleteTask(this)">Delete</button>`;

    //add task element to task list
    if (taskListContent.innerHTML === "No Task") {
      taskListContent.innerHTML = "";
    }
    taskListContent.appendChild(taskElement);

    //clear form fields
    document.getElementById("taskForm").reset();

    //show task list section
    showSection("taskList");
  } else {
    alert("Please fill in both fields");
  }
}

function deleteTask(button) {
  const taskElement = button.parentElement;
  const deletedTaskContent = document.getElementById("deletedTaskContent");

  //move task to deleted tasks
  if (deletedTaskContent.innerHTML === "No Task") {
    deletedTaskContent.innerHTML = "";
  }
  deletedTaskContent.appendChild(taskElement);

  //remove task from task list
  taskElement.querySelector("button").remove();
}

function changeTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
