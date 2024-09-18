async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3002/produits/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const products = await response.json();

        // Gérer la réponse du backend
        if (response.ok) {
            // Afficher les produits sur la page
            displayProducts(products);
        } else {
            console.error('Erreur lors de la récupération des produits');
        }
    } catch (error) {
        console.error('Erreur lors de la communication avec le backend:', error.message);
    }
}

function displayProducts(products) {
    // Vous pouvez utiliser cette fonction pour afficher les produits sur votre page
    // Par exemple, vous pouvez manipuler le DOM pour ajouter les produits à une liste ou une table HTML
    // Voici un exemple basique :

    const productList = document.getElementById('product-list');

    // Effacer le contenu existant
    productList.innerHTML = '';

    // Ajouter chaque produit à la liste
    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'col-md-4';

        const card = `
            <div class="card mb-4">
                <img src="${product.photo}" class="card-img-top" alt="${product.nom}">
                <div class="card-body">
                    <h5 class="card-title">${product.nom}</h5>
                    <p class="card-text">Prix: ${product.prix} €</p>
                    <button class="btn btn-primary" onclick="viewProduct('${product.idproduits}')">Voir le produit</button>
                </div>
            </div>
        `;

        cardDiv.innerHTML = card;
        productList.appendChild(cardDiv);
        
    });
}

function viewProduct(productId) {
    // Rediriger vers la page product.html avec l'ID du produit en paramètre
    window.location.href = `produit.html?id=${productId}`;
}



document.addEventListener('DOMContentLoaded', fetchProducts);