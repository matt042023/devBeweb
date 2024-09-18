const fs = require("fs").promises;
const pathData = "./src/data/cafe.json";

exports.getProducts = async () => {
        let products;

        await fs.readFile(pathData).then(data => {
                const manipulableData = JSON.parse(data)
                products = manipulableData.products;
                return products
        }).catch(error => {
            throw new Error ("Il y a une erreur")
        })
        return products;
}

exports.getProductsbyId = async (id) => {
    let product;
    await fs.readFile(pathData).then(data =>{
        const manipulableData = JSON.parse(data);
        product = manipulableData.products.find(product => product.id === id)
        return product
    }).catch(error => {
        throw new Error ("Nous ne trouvons pas le produits par son id")
    })
    return product
}

exports.createdProduct = async (product) => {
    await fs.readFile(pathData).then(data => {
        const manipulableData = JSON.parse(data);
        const lastProduct = manipulableData.products[manipulableData.products.length -1];
        product["id"] = lastProduct.id +1;
        manipulableData.products.push(product);
        fs.writeFile(pathData, JSON.stringify(manipulableData)).then(() => {
            console.log("le produit a été créé")
        }).catch(error => {
            throw new Error("Erreur lors de l'ecriture du produit")
        })
    }).catch (error => {
        throw new Error ("Erreur au moment de la lecture du produit")
    })
}

exports.deleteProductsById = async (id) => {
    await fs.readFile(pathData).then(data => {
        const manipulableData = JSON.parse(data);
        manipulableData.products = manipulableData.products.filter((product) => product.id !== id);
        fs.writeFile(pathData, JSON.stringify(manipulableData)).then(() => {
            console.log("Le produit a été supprmié")
        }) .catch(error => {
            throw new Error ("Erreur lors de l'ecriure des données")
        })
    }).catch(error => {
        throw new Error ("Erreur lors de la lecture des données")
    })
};