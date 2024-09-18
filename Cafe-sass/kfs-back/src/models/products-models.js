const fs = require("fs").promises
const pathData = "./src/data/sassKf.json"

exports.getAllProducts = async () => {
    let products;
    await fs.readFile(pathData).then(data => {
        const manipulationData = JSON.parse(data);
        products = manipulationData.products;
        return products
    }).catch(error => {
        throw new Error("Erreur dans l'affichage des produits")
    })
    return products
}


exports.getById = async (id) => {
    let product;
    await fs.readFile(pathData).then(data => {
        const manipulationData = JSON.parse(data)
        product = manipulationData.products.find(product => product.id === id)
        return product
    }).catch(error => {
        throw new Error("Erreur d'affichage du produit par id")
    })
    return product
}


exports.createdProduct = async (product) => {
    await fs.readFile(pathData).then(data => {
        const manipulationData = JSON.parse(data)
        const lastproduct = manipulationData.products[manipulationData.products.length - 1]
        product["id"] = lastproduct.id + 1;
        manipulationData.products.push(product)
        fs.writeFile(pathData, JSON.stringify(manipulationData)).then(() => {
            console.log("Le produit à bien été modifié en chaine de caractère")
        }).catch(error => {
            throw new Error("Erreur lors de l'écriture du produit")
        });
    }).catch(error => {
        throw new Error("Erreur lors de la lecture du produit")
    });
};


exports.deleteProductById = async (id) => {
    try {
        const data = await fs.readFile(pathData, 'utf8');
        const manipulationData = JSON.parse(data);
        const index = manipulationData.products.findIndex(product => product.id === id);
        if (index !== -1) {
            const product = manipulationData.products.splice(index, 1)[0];
            await fs.writeFile(pathData, JSON.stringify(manipulationData, null, 2));
            console.log("Produit supprimé");
            return product;
        } else {
            throw new Error("Produit non trouvé");
        }
    } catch (error) {
        throw new Error("Erreur lors de la suppression du produit : " + error.message);
    }
};

exports.upDatedProduct = async (id, nouveauContenue) => {
    try {
        const data = await fs.readFile(pathData, 'utf8');
        const manipulerData = JSON.parse(data);
        const productTrouver = manipulerData.products.find(product => product.id === id);
        
        if (productTrouver) {
            if (nouveauContenue.name) {
                productTrouver.name = nouveauContenue.name;
            }
            if (nouveauContenue.price) {
                productTrouver.price = nouveauContenue.price;
            }
            
            await fs.writeFile(pathData, JSON.stringify(manipulerData, null, 2));
            console.log("Produit mis à jour correctement sans problème");
            return productTrouver;
        } else {
            return null; // Retournez null si le produit n'est pas trouvé
        }
    } catch (error) {
        console.error(error);
        throw new Error("Erreur lors de la mise à jour du produit : " + error.message);
    }
}
