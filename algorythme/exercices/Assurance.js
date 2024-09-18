

let age = prompt("saisir l'age du conducteur")
console.log(age)
let anneePermis = prompt("saisir les annees de permis")
console.log(anneePermis)
let accident = prompt("saisir le nombre d'accident")
console.log(accident)
let fidelite = prompt("saisir le nombre d'annee de fidelité")
console.log(fidelite)



if (
    ((age >= 25) && (anneePermis >= 2) && (accident == 0) && (fidelite >=1))
) {
    console.log("tarif A")
} else if (
    ((age >= 25) && (anneePermis >= 2) && (accident == 0) && (fidelite <1)) ||
    ((age < 25) && (anneePermis >= 2) && (accident ==0) && (fidelite >=1)) ||
    ((age >= 25) && (anneePermis < 2) && (accident == 0) && (fidelite >=1)) ||
    ((age >= 25) && (anneePermis >= 2) && (accident == 1) && (fidelite >=1))
) {
    console.log("tarif B")
} else if (
    ((age < 25) && (anneePermis >= 2) && (accident == 0) && (fidelite <1)) ||
    ((age >= 25) && (anneePermis < 2) && (accident == 0) && (fidelite <1)) ||
    ((age >= 25) && (anneePermis >= 2) && (accident == 1) && (fidelite <1)) ||
    ((age < 25) && (anneePermis < 2) && (accident == 0) && (fidelite >=1)) ||
    ((age < 25) && (anneePermis >= 2) && (accident == 1) && (fidelite >=1)) ||
    ((age >= 25) && (anneePermis < 2) && (accident == 1) && (fidelite >=1)) ||
    ((age >= 25) && (anneePermis >= 2) && (accident == 2) && (fidelite >=1))
) {
    console.log("tarif C")
} else if (
    ((age < 25) && (anneePermis < 2) && (accident == 0) && (fidelite <1)) ||
    ((age < 25) && (anneePermis >= 2) && (accident == 1) && (fidelite <1)) ||
    ((age >= 25) && (anneePermis < 2) && (accident == 1) && (fidelite <1)) ||
    ((age >= 25) && (anneePermis >= 2) && (accident == 2) && (fidelite <1))
) {
    console.log("tarif D")
} else {
    console.log("refusé")
}
