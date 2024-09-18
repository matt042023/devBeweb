// Récupération des boutons de l'HTML
const btnAjoutRistretto = document.getElementById('btnAjoutRistretto');
const btnSupprimerRistretto = document.getElementById('btnSupprimerRistretto');
const btnAjoutExpresso = document.getElementById('btnAjoutExpresso');
const btnSupprimerExpresso = document.getElementById('btnSupprimerExpresso');
// Ajoutez les autres boutons pour les produits restants de la même manière.



// Trouvez les produits correspondants dans le tableau
const ristrettoProduct = arrayProducts.find(product => product.name === "Ristretto");
const expressoProduct = arrayProducts.find(product => product.name === "Expresso");
// Trouvez les autres produits de la même manière.

// Fonction pour mettre à jour l'affichage des quantités et du prix total
function mettreÀJourAffichage() {
  // Parcourez le tableau des produits et affichez les quantités dans l'interface utilisateur.
  for (const produit of arrayProducts) {
    const elementQuantite = document.getElementById(`quantite_${produit.name}`);
    elementQuantite.textContent = produit.quantity;
  }

  // Calculez le prix total en fonction des quantités de produits.
  const prixTotal = arrayProducts.reduce((total, produit) => total + (produit.quantity * produit.price), 0);
  const elementPrixTotal = document.getElementById('prixTotal');
  elementPrixTotal.textContent = `Prix total : ${prixTotal.toFixed(2)}€`;

  calculerPrixAvecETSansTVA();
}


function calculerPrixAvecETSansTVA() {
  // Calculez le prix total en fonction des quantités de produits.
  const prixTotalAvecTVA = arrayProducts.reduce((total, produit) => total + (produit.quantity * produit.price), 0);

  // Calculez le prix hors taxe (TVA à 5,5%)
  const tauxTVA = 0.055; // Taux de TVA à 5,5%
  const prixTotalHT = prixTotalAvecTVA / (1 + tauxTVA);

  // Affichez le prix total avec et sans TVA sur la page HTML
  const elementPrixTotal = document.getElementById('prixTotal');
  elementPrixTotal.innerHTML = `Prix total avec TVA : ${prixTotalAvecTVA.toFixed(2)}€<br>Prix total hors TVA : ${prixTotalHT.toFixed(2)}€`;
}



// Fonction générique pour gérer l'ajout et la suppression de produits
function gérerProduit(produit, action) {
  const produitCourant = arrayProducts.find(p => p.name === produit);

  if (produitCourant) {
    if (action === 'ajout') {
      produitCourant.quantity++;
    } else if (action === 'suppression' && produitCourant.quantity > 0) {
      produitCourant.quantity--;
    }

    // Mettez à jour l'affichage des quantités et le prix total
    mettreÀJourAffichage();
  }
  sauvegarderProduitsDansLocalStorage();
}

// Ajoutez des gestionnaires de clic pour les boutons d'ajout et de suppression
btnAjoutRistretto.addEventListener("click", () => gérerProduit("Ristretto", "ajout"));
btnSupprimerRistretto.addEventListener("click", () => gérerProduit("Ristretto", "suppression"));
btnAjoutExpresso.addEventListener("click", () => gérerProduit("Expresso", "ajout"));
btnSupprimerExpresso.addEventListener("click", () => gérerProduit("Expresso", "suppression"));
// Ajoutez les autres gestionnaires de clic pour les produits restants de la même manière.



function sauvegarderProduitsDansLocalStorage() {
  // Convertit le tableau des produits en une chaîne JSON
  const produitsJSON = JSON.stringify(arrayProducts);
  // Stocke la chaîne JSON dans le local storage sous la clé "products"
  localStorage.setItem("products", produitsJSON);
}



// Chargez les produits depuis le stockage local au chargement de la page
function chargerProduitsDepuisLocalStorage() {
  const produitsLocalStorage = JSON.parse(localStorage.getItem('products'));
  if (produitsLocalStorage) {
    for (const produit of produitsLocalStorage) {
      const produitCourant = arrayProducts.find(p => p.name === produit.name);
      if (produitCourant) {
        produitCourant.quantity = produit.quantity;
      }
    }
    // Mettez à jour l'affichage des quantités et du prix total
    mettreÀJourAffichage();
  }
}

chargerProduitsDepuisLocalStorage();