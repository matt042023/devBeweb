const TextContainer = document.getElementById('TextContainer');
const TextButton = document.getElementById('TextButton');
const MessageContainer = document.getElementById('MessageContainer');
const showAll = document.getElementById('showAll');
const showCompleted = document.getElementById('showCompleted');
const showRemove = document.getElementById('showRemove');
const totalRemove = document.getElementById('totalRemove');

showAll.addEventListener("click", () => { Array.from(document.querySelectorAll("#MessageContainer div")).forEach((div) => (div.style.display = 'block')); })
showCompleted.addEventListener("click", () => { Array.from(document.querySelectorAll("#MessageContainer div")).forEach((div) => (div.style.display = div.classList.contains("completed") ? "block" : "none")); })
showRemove.addEventListener("click", () => { Array.from(document.querySelectorAll("#MessageContainer div")).forEach((div) => (div.style.display = div.classList.contains("remove") ? "block" : "none")); })

const savedTasks = () => {
    const task = Array.from(document.querySelectorAll("#MessageContainer div")).map((div) => ({ text: div.textContent, class: div.className, }))
    localStorage.setItem("Tasks", JSON.stringify(task))
}
const loadTasks = () => {
    const saveTasks = JSON.parse(localStorage.getItem("Tasks") || "[]");
    saveTasks.forEach((task) => {
        const ValidationText = document.createElement('div');
        ValidationText.textContent = task.text;
        ValidationText.className = task.class;
        MessageContainer.appendChild(ValidationText);
        eventModif(ValidationText);
        savedTasks();
    });
}
const eventModif = (ValidationText) => {
    ValidationText.addEventListener('click', () => {
        if (ValidationText.classList.contains('remove')) {
            ValidationText.classList.remove('remove');
            ValidationText.classList.toggle('encours');
        } else if (ValidationText.classList.contains('completed')) {
            ValidationText.classList.remove('completed');
            ValidationText.classList.toggle('encours');
        } else if (ValidationText.classList.contains('encours')) {
            ValidationText.classList.remove('encours');
            ValidationText.classList.toggle('completed');
        } else { ValidationText.classList.toggle('encours'); }
        savedTasks();
    })
    ValidationText.addEventListener('contextmenu', (event) => {
        if (ValidationText.classList.contains('completed')) {
            ValidationText.classList.remove('completed');
            ValidationText.classList.toggle('remove')
        } else if (ValidationText.classList.contains('encours')) {
            ValidationText.classList.remove('encours');
            ValidationText.classList.toggle('remove')
        } else (ValidationText.classList.toggle('remove'))
        savedTasks();
    })
    ValidationText.addEventListener('dblclick', () => {
        const updatedTask = prompt("saisir", ValidationText.textContent);
        if (updatedTask != '') { ValidationText.textContent = updatedTask; savedTasks(); }
    })
}
TextButton.addEventListener('click', () => {
    const AddText = TextContainer.value;
    if (AddText === '') return;
    const ValidationText = document.createElement('div');
    ValidationText.textContent = AddText;
    MessageContainer.appendChild(ValidationText);
    TextContainer.value = '';
    eventModif(ValidationText);
    savedTasks();
})
totalRemove.addEventListener('click', () => {
    localStorage.clear();
    location.replace(location.href);
})


loadTasks();