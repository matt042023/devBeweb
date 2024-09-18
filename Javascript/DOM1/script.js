// On récupère l'élément input
const saisiDesTaches = document.getElementById("saisiDesTaches");
// On récupère le boutton
const valideLesTache = document.getElementById("valideLesTache");
// On récupère la div
const listeDesTaches = document.getElementById("listeDesTaches");

// on reccupere les trois boutton dans html => voirLesTaches, tacheTerminees, tacheSupprimees
const voirLesTaches = document.getElementById('voirLesTaches');
const enCours = document.getElementById('enCours');
const tacheTerminees = document.getElementById('tacheTerminees');
const tacheSupprimees = document.getElementById('tacheSupprimees');
 

voirLesTaches.addEventListener("click", () =>{
    Array.from(document.querySelectorAll("#listeDesTaches div")).forEach(
        (div) =>(div.style.display = "block")
    );
});

enCours.addEventListener("click", () =>{
    Array.from(document.querySelectorAll("#listeDesTaches div")).forEach(
        (div) =>
        (div.style.display = div.classList.contains("inClass")? "block" : "none")
    );
});
tacheTerminees.addEventListener("click", () =>{
    Array.from(document.querySelectorAll("#listeDesTaches div")).forEach(
        (div) =>
        (div.style.display = div.classList.contains("completed")? "block" : "none")
    );
});

tacheSupprimees.addEventListener("click", () =>{
    Array.from(document.querySelectorAll("#listeDesTaches div")).forEach(
        (div) =>
        (div.style.display = div.classList.contains("remove")? "block" : "none")
    );
});



// Sur le bouton tu attend le click
valideLesTache.addEventListener("click", () => {
    // Tu récupère dans l'input la valeur rentré dans l'input
    const nouvelleTache = saisiDesTaches.value;
    // Tu vérifie que la valeur n'est pas vide
    if (nouvelleTache === "") return;
    // Tu me crée une nouvelle div
    const contenueDesTaches = document.createElement("div");
    // Dans cette div tu me met le text qui il y a dans l'input
    contenueDesTaches.textContent = nouvelleTache;
    // Tu me met cette div avec ce text dans la div qui dois rassembler toutes les taches
    listeDesTaches.appendChild(contenueDesTaches);
    // tu vide la valeur de l'input
    saisiDesTaches.value = "";
    ajoutDesEvenement(contenueDesTaches);
    sauvegardeDesTaches()
});
// creation d'une fonction de sauvegarde
function sauvegardeDesTaches() {
    // Crée un tableau "tasks" à partir de tous les éléments div contenus dans la div #listeDesTaches
    const tasks = Array.from(document.querySelectorAll("#listeDesTaches div")).map(
        (divReturned) => ({
            text: divReturned.textContent, // Récupère le contenu textuel de l'élément div
            class: divReturned.className,   // Récupère la classe de l'élément div
        })
    );
    // Enregistre le tableau "tasks" dans le stockage local du navigateur en tant que chaîne JSON
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fonction pour charger les tâches à partir du stockage local
function chargerLesTaches() {
    // Récupère les tâches enregistrées dans le stockage local et les convertit en tableau d'objets
    const sauvegardeDesTaches = JSON.parse(localStorage.getItem("tasks") || "[]");
    // Parcourt chaque tâche dans le tableau "sauvegardeDesTaches"
    sauvegardeDesTaches.forEach((task) => {
        // Crée un nouvel élément div pour représenter la tâche
        const contenueDesTaches = document.createElement("div");
        // Affecte le contenu textuel de la tâche à l'élément div
        contenueDesTaches.textContent = task.text;
        // Affecte la classe de la tâche à l'élément div
        contenueDesTaches.className = task.class;
        // Ajoute des événements à l'élément div pour permettre l'interaction de l'utilisateur
        ajoutDesEvenement(contenueDesTaches);
        // Ajoute l'élément div à la liste des tâches affichées sur la page
        listeDesTaches.appendChild(contenueDesTaches);
    });
}

function ajoutDesEvenement(contenueDesTaches) {
    contenueDesTaches.addEventListener("click", () => {
        // rajouter une class dans l'élément qui s'appelle completed
        if(contenueDesTaches.classList.contains('remove' ||'completed')) contenueDesTaches.classList.remove('remove' || 'completed');
        contenueDesTaches.classList.toggle("inClass");
        sauvegardeDesTaches();
    });
    contenueDesTaches.addEventListener("click", () => {
        // rajouter une class dans l'élément qui s'appelle completed
        if(contenueDesTaches.classList.contains('remove' || 'inClass')) contenueDesTaches.classList.remove('remove' || 'inClass');
        contenueDesTaches.classList.toggle("completed");
        sauvegardeDesTaches();
    });
    // au click droit sur l'élément
    contenueDesTaches.addEventListener("contextmenu", () => {
        // j'enleve le fonctionnement par défaut du click droit
        // event.preventDefault()
        // et je lui dis de supprimer l'élément
        // contenueDesTaches.remove();
        if(contenueDesTaches.classList.contains('completed' || 'inClass')) contenueDesTaches.classList.remove('completed' || 'inClass')
        contenueDesTaches.classList.toggle("remove");
        sauvegardeDesTaches();
    });

    contenueDesTaches.addEventListener("dblclick", () => {
        const updatedTask = prompt("Modifier la tâche : ", contenueDesTaches.textContent);
        if(updatedTask !== "") {
            contenueDesTaches.textContent = updatedTask;
        }
        sauvegardeDesTaches();
    })

}
chargerLesTaches();