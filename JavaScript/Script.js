document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const editTaskModal = new bootstrap.Modal(document.getElementById("editTaskModal"));
    const deleteTaskModal = new bootstrap.Modal(document.getElementById("deleteTaskModal"));
    const saveEditButton = document.getElementById("saveEditButton");
    const confirmDeleteButton = document.getElementById("confirmDeleteButton");

    addTaskButton.addEventListener("click", function() {
        const taskText = document.getElementById("taskInput").value;

        if (taskText.trim() !== "") {
            const taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");
            
            //Contenedor del checkbox y el span
            const contentText = document.createElement("div");
            contentText.classList.add("content-text");

            //Input checkbox
            const checkbox = document.createElement("input");
            checkbox.className = "InputCheckbox"
            checkbox.type = "checkbox";

            //Span
            const taskTextElement = document.createElement("span");
            taskTextElement.className = "Span";
            taskTextElement.textContent = taskText;

            //Contenedor de los botones
            const contentButtons = document.createElement("div");
            contentButtons.classList.add("content-buttons");

            //Botón de Editar
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "ButtonEditar";
            editButton.classList.add("btn", "btn-primary", "btn-sm");

            //Botón de Eliminar
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            editButton.className = "ButtonEliminar";
            deleteButton.classList.add("btn", "btn-danger", "btn-sm");

            contentText.appendChild(checkbox);
            contentText.appendChild(taskTextElement);
            contentButtons.appendChild(editButton);
            contentButtons.appendChild(deleteButton);

            taskContainer.appendChild(contentText);
            taskContainer.appendChild(contentButtons);

            document.getElementById("todo-list").appendChild(taskContainer);
            document.getElementById("taskInput").value = "";

            editButton.addEventListener("click", function() {
                const newText = taskTextElement.textContent;
                document.getElementById("editedTaskText").value = newText;
                editTaskModal.show();

                saveEditButton.addEventListener("click", function() {
                    const editedText = document.getElementById("editedTaskText").value;
                    taskTextElement.textContent = editedText;
                    editTaskModal.hide();
                });
            });

            deleteButton.addEventListener("click", function() {
                deleteTaskModal.show();

                confirmDeleteButton.addEventListener("click", function() {
                    taskContainer.remove();
                    deleteTaskModal.hide();
                });
            });
        }
    });
});
