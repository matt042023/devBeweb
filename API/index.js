



async function fonctionRecuperationPersonnage() {
    try {
        const retourAPI = await fetch('https://swapi.dev/api/people/');
        if (!retourAPI.ok) {
            throw new Error('Erreur lors de la récupération des données StarWars');
        }
        const donneesAPI = await retourAPI.json();
        affichagePersonnage(donneesAPI.results);
    } catch (error) {
        console.error(error);
    }
}



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

    const creationDivLienDansNouvelleFenetre = document.createElement('div');
    creationDivLienDansNouvelleFenetre.classList.add('divPopUp');
    creationDivLienDansNouvelleFenetre.appendChild(créationTitreLien);
    creationDivLienDansNouvelleFenetre.appendChild(creationListeDansLeLien);

    const largeurFenetre = screen.width;
    const hauteurFenetre = screen.height;
    const largeurPopup = 1000; 
    const hauteurPopup = 800;
    
    const left = (largeurFenetre - largeurPopup) / 2;
    const top = (hauteurFenetre - hauteurPopup) / 2;
    
    const nouvelleFenetrePresentation = window.open('', 'PopupWindow', `width=${largeurPopup},height=${hauteurPopup},left=${left},top=${top}`);    
    nouvelleFenetrePresentation.document.body.innerHTML = creationDivLienDansNouvelleFenetre.outerHTML;
}