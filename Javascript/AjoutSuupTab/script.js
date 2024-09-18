// création tableau vide

const vente = []

// création TVA
const tva = 5.5 / 100


// ajouter un produit


const ajoutProduit = (produit, prix, promotion = false) => {
    if (promotion){
        prix = promotionSpecial(prix)
    }
    vente.push({ produit, prix, promotion })
}

// promotion
const promotionSpecial = (prix) =>{
    return prix * 0.9
}



// supprimer un produit

// declaration de la fonction suppProduit
const suppProduit = (supprimer) => {
    const selecteurTableau = vente.indexOf(vente[supprimer])
    if (selecteurTableau > -1) {
        vente.splice(selecteurTableau, 1)
    }
}


// calcule du chiffre d'affaire

const calculerChiffreAffaire = (vente) => {
    total = 0;
    for (let i = 0; i < vente.length; i++) {
        total += vente[i].prix;
    }
    return total
}



// calcule de la tva
const calculerTva = (total) => {
    resultatTva = (total * tva).toFixed(2);
    return resultatTva
}

// soutraction du chiffre d'affaire par la tva

const chiffreAffaireHt = (total, tvaTest) => {
    resultatChiffreAffaireHt = total - tvaTest
    return resultatChiffreAffaireHt
}


// afficher les produits

const afficherProduit = () => {
    suppProduit(2);
    for (var i = 0; i < vente.length; i++) {
        console.log(`Prix du produit ${(vente[i].prix).toFixed(2)},le produit est ${vente[i].produit}`)
    }
    calculerChiffreAffaire(vente);
    calculerTva(total)
    chiffreAffaireHt(total, resultatTva)
    console.log(`Chiffre d'affaire TTC : ${total}`)
    console.log(`Montant TVA : ${resultatTva}`)
    console.log(`Chiffre d'affaire HT : ${resultatChiffreAffaireHt}`)
}














ajoutProduit("kebab", 6.5, true);
ajoutProduit("falafel", 200,true);
ajoutProduit("Kefta", 5, true);
ajoutProduit("Merguez", 4);
ajoutProduit("Maxikebab", 8);
afficherProduit()




//  console.log(vente)