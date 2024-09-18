



// Fonction pour ouvrir les informations de l'API lorsqu'un lien est cliqué.
function ouvrirInformationAPI(rechercheDonneesURL) {
    // Effectuez une requête GET à l'URL de l'API.
    fetch(rechercheDonneesURL)
        .then(retourAPI => retourAPI.json())
        .then(donneesAPI => {
            // Traitez les données de l'API comme vous le souhaitez (par exemple, affichez-les dans un popup).
            // Vous pouvez personnaliser la manière dont vous affichez les données ici.
            overtureFenetreLien(donneesAPI);
            // Ou affichez les données dans un popup.
            const popupData = JSON.stringify(donneesAPI, null, 2);
            
        })
        .catch(error => {
            console.error(error);
        });
}


// Fonction pour récupérer les personnages StarWars depuis une API
async function fonctionRecuperationPersonnage() {
    try {
        // Utilisation de l'API fetch pour effectuer une requête GET à l'URL de l'API StarWars.
        const retourAPI = await fetch('https://swapi.dev/api/people/');

        // Vérification si la réponse de la requête est réussie (statut HTTP 200 OK).
        if (!retourAPI.ok) {
            // En cas d'erreur de réponse, lance une exception avec un message d'erreur personnalisé.
            throw new Error('Erreur lors de la récupération des données StarWars');
        }

        // Si la réponse est réussie, convertit la réponse en un objet JavaScript en utilisant .json().
        const donneesAPI = await retourAPI.json();

        // Appelle une autre fonction pour afficher les personnages sur la page en utilisant les données récupérées.
        affichagePersonnage(donneesAPI.results);

    } catch (error) {
        // En cas d'erreur lors de la récupération des données ou de traitement, cette partie du code sera exécutée.
        // La variable "error" contient des informations sur l'erreur.
        console.error(error);
    }
}


// Fonction pour afficher les personnages sur la page
function affichagePersonnage(personnage) {
    // Sélectionne l'élément HTML avec la classe "personnage" pour y ajouter les personnages.
    const creationDivPersonnage = document.querySelector('.divPersonnage');

    // Efface tout le contenu actuel de la div pour la remplacer par de nouveaux personnages.
    creationDivPersonnage.innerHTML = '';

    // Parcourt la liste de personnages (fournie en tant que paramètre) à l'aide de la méthode forEach.
    personnage.forEach(divPersonnage => {
        // Pour chaque personnage, crée un nouvel élément div pour le personnage.
        const creationDiv = document.createElement('div');
        creationDiv.classList.add('divParPersonnage');

        // Crée un titre <h2> avec le nom du personnage.
        const creationTitre = document.createElement('h2');
        creationTitre.textContent = divPersonnage.name;

        // Crée un bouton cliquable.
        const creationBouttonDetailPersonnage = document.createElement('button');
        creationBouttonDetailPersonnage.textContent = "Détails des Personnage"; // Texte du bouton

        // Ajoute un gestionnaire d'événements pour le bouton (pour afficher les détails du personnage au clic).
        creationBouttonDetailPersonnage.addEventListener('click', () => {
            // Appelle la fonction pour créer et ouvrir un popup avec les détails du personnage.
            overtureFenetreLien(divPersonnage);
        });

        // Ajoute les éléments créés à l'élément du personnage.
        creationDiv.appendChild(creationTitre);
        creationDiv.appendChild(creationBouttonDetailPersonnage);

        // Ajoute l'élément du personnage à la div principale "personnage" pour l'affichage.
        creationDivPersonnage.appendChild(creationDiv);
    });
}

// Fonction pour créer et ouvrir un popup avec les détails du personnage.
function overtureFenetreLien(divPersonnage) {
    // Crée un élément de popup (peut être une div ou une fenêtre modale, selon vos besoins).
    const creationDivPopUp = document.createElement('div');
    creationDivPopUp.classList.add('divPopUp');

    // Crée un titre <h2> avec le nom du personnage.
    const créationTitreLien = document.createElement('h2');
    créationTitreLien.textContent = divPersonnage.name || divPersonnage.title;

    // Crée une liste des données du personnage.
    const creationListeDansLeLien = document.createElement('ul');
    for (const key in divPersonnage) {
        if (divPersonnage.hasOwnProperty(key)) {
            const listItem = document.createElement('li');
            let ValeurDesDonnesDeLaListe = divPersonnage[key];

            // Vérifie si ValeurDesDonnesDeLaListe est une chaîne de caractères avant d'appliquer replace.
            if (typeof ValeurDesDonnesDeLaListe === 'string') {
                // Utilise une expression régulière pour rechercher des URL dans la valeur.
                const expressionRechercheURL = /(https?:\/\/[^\s]+)/g;
                ValeurDesDonnesDeLaListe = ValeurDesDonnesDeLaListe.replace(expressionRechercheURL, (lienVersUrl) => {
                    // Remplace l'URL par un lien cliquable qui appelle la fonction ouvrirInformationAPI au clic.
                    return `<a href="#" onclick="ouvrirInformationAPI('${lienVersUrl}'); return false;">${lienVersUrl}</a>`;
                });
            } else if (Array.isArray(ValeurDesDonnesDeLaListe)) {
                // Si la valeur est un tableau, vérifie chaque élément du tableau.
                const modifiedArray = ValeurDesDonnesDeLaListe.map((item) => {
                    if (typeof item === 'string') {
                        // Utilise une expression régulière pour rechercher des URL dans l'élément du tableau.
                        const expressionRechercheURL = /(https?:\/\/[^\s]+)/g;
                        return item.replace(expressionRechercheURL, (lienVersUrl) => {
                            // Remplace l'URL par un lien cliquable qui appelle la fonction ouvrirInformationAPI au clic.
                            return `<a href="#" onclick="ouvrirInformationAPI('${lienVersUrl}'); return false;">${lienVersUrl}</a>`;
                        });
                    }
                    return item;
                });

                // Remplace la valeur du tableau par le tableau modifié.
                ValeurDesDonnesDeLaListe = modifiedArray.join(', '); // Vous pouvez personnaliser le séparateur si nécessaire.
            }
            // Utilise <strong> pour afficher les clés en gras et ajoute la valeur modifiée avec les liens.
            listItem.innerHTML = `<strong>${key}:</strong> ${ValeurDesDonnesDeLaListe}`;
            creationListeDansLeLien.appendChild(listItem);
        }
    }

 // Crée le contenu HTML complet du popup.
    const creationDivLienDansNouvelleFenetre = document.createElement('div');
    creationDivLienDansNouvelleFenetre.classList.add('divPopUp');
    creationDivLienDansNouvelleFenetre.appendChild(créationTitreLien);
    creationDivLienDansNouvelleFenetre.appendChild(creationListeDansLeLien);

    // Ouvre un nouveau popup avec le contenu.
    const largeurFenetre = screen.width;
    const hauteurFenetre = screen.height;
    const largeurPopup = 1000; // Largeur souhaitée de la fenêtre pop-up
    const hauteurPopup = 800; // Hauteur souhaitée de la fenêtre pop-up
    
    const left = (largeurFenetre - largeurPopup) / 2;
    const top = (hauteurFenetre - hauteurPopup) / 2;
    
    const nouvelleFenetrePresentation = window.open('', 'PopupWindow', `width=${largeurPopup},height=${hauteurPopup},left=${left},top=${top}`);    
    nouvelleFenetrePresentation.document.body.innerHTML = creationDivLienDansNouvelleFenetre.outerHTML;
}


// Appeler la fonction pour récupérer et afficher les personnages StarWars
fonctionRecuperationPersonnage();


