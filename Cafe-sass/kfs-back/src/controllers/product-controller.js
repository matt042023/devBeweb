const {request, response} = require("express")
const {getAllProducts, getById, createdProduct, deleteProductById, upDatedProduct} = require("../models/products-models")


exports.getProductsAll = async(request, response) => {
    try{
        const products = await getAllProducts();
        response.status(200).json(products)
    } catch (error) {
        response.status(500).json({error : "erreur de lecture des produits"})
    }
}

exports.getProductById = async(request, response) => {
    try {
        const id = parseInt(request.params.id)
        const product = await getById(id)
        response.status(200).json(product)
    } catch (error) {
        response.status(500).json({error : "erreur de lecture du produit par ID"})
    }
}

exports.creatProducts = async (request, response) => {
    try {
        const product = request.body.products
        await createdProduct(product);
        
        response.status(201).json({message : "le produit a été ajouté"})
    } catch (error) {
        console.log(error)
        response.status(500).json({error : "Erreur de lecture lors du controlle de creation de produit"})
    }
}


exports.deleteProduct = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const product = await deleteProductById(id);
        response.status(204).json(product);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erreur lors de la suppression" });
    }
}

exports.upDateProduct = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const nouveauContenue = request.body;

        if (!nouveauContenue.name && !nouveauContenue.price) {
            response.status(400).json({ error: "Au moins le nom ou le prix doit être transmis dans la demande du body" });
            return;
        }

        const product = await upDatedProduct(id, nouveauContenue);

        if (product) {
            response.status(200).json(product);
        } else {
            response.status(404).json({ error: "Produit non trouvé (id)" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Impossible de mettre à jour, erreur 500 controller" });
    }
}