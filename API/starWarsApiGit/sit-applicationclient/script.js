

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
        const retourAPI = await fetch('https://swapi.dev/api/people/');

        if (!retourAPI.ok) {
            throw new Error('Erreur lors de la récupération des données StarWars');
        }

        const donneesAPI = await retourAPI.json();
        console.log(donneesAPI)

        affichagePersonnage(donneesAPI.results);

    } catch (error) {

        console.error(error);
    }
}


// Fonction pour afficher les personnages sur la page
function affichagePersonnage(personnage) {
    // Sélectionne l'élément HTML avec la classe "personnage" pour y ajouter les personnages.
    const creationDivPersonnage = document.querySelector('.containerPersonage');

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
    const creationDivPopUp = document.createElement('div');
    creationDivPopUp.classList.add('divPopUp');

    const créationTitreLien = document.createElement('h2');
    créationTitreLien.textContent = divPersonnage.name || divPersonnage.title;

    const creationListeDansLeLien = document.createElement('ul');
    for (const key in divPersonnage) {
        if (divPersonnage.hasOwnProperty(key)) {
            const listItem = document.createElement('li');
            let ValeurDesDonnesDeLaListe = divPersonnage[key];

            if (typeof ValeurDesDonnesDeLaListe === 'string') {
                const expressionRechercheURL = /(https?:\/\/[^\s]+)/g;
                ValeurDesDonnesDeLaListe = ValeurDesDonnesDeLaListe.replace(expressionRechercheURL, (lienVersUrl) => {
                    return `<a href="#" onclick="ouvrirInformationAPI('${lienVersUrl}'); return false;">${lienVersUrl}</a>`;
                });
            } else if (Array.isArray(ValeurDesDonnesDeLaListe)) {
                const modifiedArray = ValeurDesDonnesDeLaListe.map((item) => {
                    if (typeof item === 'string') {
                        const expressionRechercheURL = /(https?:\/\/[^\s]+)/g;
                        return item.replace(expressionRechercheURL, (lienVersUrl) => {
                            return `<a href="#" onclick="ouvrirInformationAPI('${lienVersUrl}'); return false;">${lienVersUrl}</a>`;
                        });
                    }
                    return item;
                });

                ValeurDesDonnesDeLaListe = modifiedArray.join(', '); 
            }
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


