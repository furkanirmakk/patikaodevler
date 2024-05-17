function newElement() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Lütfen bir görev girin!");
        return;
    }
    

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));

    li.onclick = function () {
        this.classList.toggle("checked");
    };

    const deleteBtn = document.createElement("span");
    deleteBtn.appendChild(document.createTextNode("\u00D7"));
    deleteBtn.className = "close";
    deleteBtn.onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const closeButtons = document.getElementsByClassName("close");
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        };
    }

    const listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].onclick = function () {
            this.classList.toggle("checked");
        };
    }
});
