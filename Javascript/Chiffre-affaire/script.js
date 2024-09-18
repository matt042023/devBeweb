
const vente = [
    {
        produit: "Expresso",
        Prix: 2,
        quantite: 6,
    },
    {
        produit: "café allongé",
        Prix: 2.5,
        quantite: 12,
    },
    {
        produit: "Cappuchino",
        Prix: 3,
        quantite: 2,
    },
];


const TVA = 5.5; // Taux de TVA en pourcentage

// Fonction pour calculer le chiffre d'affaires pour un produit donné
function calculChiffreAffaires(produit) {
    return produit.Prix * produit.quantite;
}

// Fonction pour calculer le chiffre d'affaires total
function calculChiffreAffairesTotal(vente) {
    const chiffreAffairesTotal = vente.reduce((total, produit) => {
        return total + calculChiffreAffaires(produit);
    }, 0);

    return chiffreAffairesTotal;
}

// Calcul du chiffre d'affaires total
const chiffreAffairesTotal = calculChiffreAffairesTotal(vente);

// Calcul du montant de TVA
const montantTVA = (chiffreAffairesTotal * TVA) / 100;

// Calcul du chiffre d'affaires HT
const chiffreAffairesHT = chiffreAffairesTotal - montantTVA;

console.log("Chiffre d'affaires total : " + chiffreAffairesTotal + " € TTC");
console.log("Montant de TVA : " + montantTVA + " €");
console.log("Chiffre d'affaires HT : " + chiffreAffairesHT + " €");