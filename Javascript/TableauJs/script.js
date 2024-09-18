
// Exercice 1
// Ecrire un algorythme qui demande la saisis d'un tableau des entier T. 
// De mettre les elements pairs dans un tableau T1 et les elements impaire dans un tableau T2.
// Valeur de T de 0 à 100 


// Exercice 2
// Ecrire un algo qui demande la saisie d'un tableau des réelles 
// dans ce tableau mettre 6 valeurs aléatoires
// Trier par ordre croissant
// demander à l'utilisateur un entier X et l'inserer dans le tableau en gardant l'ordre croissant


// Exercice 3
// Reprendre le tableau T et afficher les multiples de 2, 3, 5, 10.

// Exercice 4
// Crer 3 Tableaus : Compteur M2, compteur M3, Compeur M5
// compeur M2 : afficher les multiple de 2
// compeur M3 : afficher les multiple de 3
// compeur M5 : afficher les multiple de 5
// Afficher X nombre multiple de 2
// Afficher X nombre multiple de 3
// Afficher X nombre multiple de 5


// Exercice 1

// Ecrire un algorythme qui demande la saisis d'un tableau des entier T. 
let T = [];
let T1 = [];
let T2 = [];
for (let i = 0; i <= 100; i++) {
    T.push(i);
   console.log(T); 

    if(T[i]%2==0){
        T1.push(i)
        console.log(T1)
    }else{
        T2.push(i)
    }
}

console.log(T, T1, T2,"le tableau de pair contient " + T1.length + " nombres", "le tableau de pair contient " + T2.length + " nombres");

// Exercice 2

let T3 = [22, 4, 19, 85, 34, 76 ];
T3.sort(function (a, b) {
    return a - b;
  })
console.log(T3)

let NombreDemande = parseInt(prompt("veuillez entrer un nombre entier"))

T3.join.sort(NombreDemande)

console.log(T3)

