   let jour , mois , annee ;
    let jour_lendemain , mois_lendemain, annee_lendemain ;
    let jour_veille, mois_veille , annee_veille ;
    let nombreDeJourParMois;
    // saisir les données 5=> date
   jour = parseInt(prompt("saisir jour de 1 à 31"));
console.log(jour);   
mois = parseInt(prompt("saisir mois de 1 à 12"));
console.log(mois);
annee = parseInt(prompt("saisir année"));
console.log(annee);

    // le calendrier grégorien débute en 1583.
    // vérification de la date: non valide si:
    // si annee <1583 
    // si jour <1 ou >31 pour les mois 1 3 5 78 10 12
    // si jour <1 ou >30 pour les mois 4 6 9 11
    // mois <1 ou >12
    // si mois =2 && jour >29 pour annees bissextiles ou jour>28 pour autre annee
    // => renvoie message date incorrecte
    // calculer nombre jour/mois

    switch (mois) {
        case 2:
            if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
                nombreDeJourParMois = 29
                console.log("ceci est un mois à " + nombreDeJourParMois + " jours")
            } else {
                nombreDeJourParMois = 28
                console.log("ceci est un mois à " + nombreDeJourParMois + " jours")
            }
            break;
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            nombreDeJourParMois = 31
                console.log("ceci est un mois à " + nombreDeJourParMois + " jours")
            break;
        case 4: case 6: case 9: case 11:
            nombreDeJourParMois = 30
                console.log("ceci est un mois à " + nombreDeJourParMois + " jours")
            break;
        default:
            console.log("ceci n'est pas un mois valide. Veuillez saisir un mois valide")
    }
    console.log(nombreDeJourParMois)
    // calcul de la date du lendemain
    // si jour_lendemain < nombreDeJourParMois
        // jour_lendemain = jour+1
        // mois_lendemain = mois ;
        // annee_lendemain = annee ;
    // sinon
        // jour_lendemain = 1
        // si mois<12 
            // mois_lendemain = mois+1
            // annee_lendemain = annee
        //sinon jour=31 && mois=12
            // mois_lendemain = 1
            // annee_lendemain = annee+1


switch(mois){
    case 1: case 2 : case 3: case 4: case 5: case 6: case 7 : case 8 : case 9 : case 10 : case 11 :  
        if (jour < nombreDeJourParMois){
            jour_lendemain = jour +1;
            mois_lendemain = mois;
            annee_lendemain = annee;
        }else {
            jour_lendemain = 1;
            mois_lendemain = mois + 1;
            annee_lendemain = annee
        }
        break;
    case 12 :
            if (jour < nombreDeJourParMois){
                jour_lendemain = jour +1;
                mois_lendemain = mois;
                annee_lendemain = annee;
            }else {
                jour_lendemain = 1;
                mois_lendemain = 1;
                
                annee_lendemain = annee + 1;
    }
    break;
    default : console.log("default");
}

            console.log(jour_lendemain + "/" + mois_lendemain + "/" + annee_lendemain);
        
    // calcul de la date de la veille
    // si jour=1
        // si && mois=1
            // jour_veille=31
            // mois_veille=12
            // annee_veille = annee-1
        // si && mois=3 
            // mois_veille=2
            // annee_veille= annee
                // si annee bissextile
                    // jour_veille=29
                // sinon
                 // jour_veille=28
        // si && mois= 4 6 9 11
            // jour_veille=31
        //sinon
            // jour_veille=30
            // mois_veille = mois-1
            // annee_veille = annee
    // si jour!= 1er du mois
        // jour_veille= jour-1
        // mois_veille= mois
        // annnee_veille = anne