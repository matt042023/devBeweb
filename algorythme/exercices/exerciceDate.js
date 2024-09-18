// condition 
// annee> 1582
// Mois 4 || 6 || 9 || 11 = 30 jours
// Mois 1 || 3 || 5 || 7 || 8 || 10 || 12 = 31 jours
// annee bissextile => mois 2 = 29 jours sinon Mois 2= 28 jours


const jour_Lendemain = ++jour
const annee_Bissextile = annee % 4 === 0 && (annee % 100 !==0|| annee % 400 === 0)

switch (jour_Lendemain){
        case annee <= 1582:
            console.log("date non prise en compte")
        case jour == 30 && mois == 4 || 6 || 9 || 11:
            jour_Lendemain = (jour==1 && ++mois)
        case jour_Lendemain == 31 && mois == 1 || 3 || 5 || 7 || 8 || 10 || 12:
            jour_Lendemain = (jour==1 && ++mois)
        case jour_Lendemain = 29 && mois == 2 annee = annee_Bissextile