const { request, response } = require("express");
const {getProducts, getProductsbyId,createdProduct} = require("../model/product-models")

exports.getAllProducts = async (request,response) => {
    try {
        const products = await getProducts();
        response.status(200).json(products)
    }catch(error){
        response.status(500).json({error : error})
    }
};

exports.getProductbyId = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const product = await getProductsbyId(id)
        response.status(200).json(product)
    } catch (error){
        response.status(500).json({error : error})
    }
}

exports.createProduct = async (request, response) => {
    try{
        const product = request.body.products
        await createdProduct(product)
        response.status(201).json({message : "le produit est créé"})
    }
    catch(error) {
        console.log(error)
        response.status(501).json({error : error})
        
    }
}

exports.deleteProduct = async (request, response) => {
    try {
        const id = parseInt(request, params.id);
        await deleteProduct(id);
        response.status(204).json({ message : "Le produit a  été supprimé"})
    }catch(error){
        response.status(500).json({ error : "Erreur lors de la suppression"})
    }
}

exports.updateProduct = async(request, response) => {
    try {
        const id = parseInt(request, params.id);
        const productUpdate = request.body;

        if (!updateProduct.name && !updateProduct.price){
            response.status(400).json({message : "Remplacer au moins un champ"})
            return
        }
        const product = await upDateProductById(id,productUpdate)
        response.status(200).json(product)

    }catch(error){
        response.status(500).json({error : error})
    }
}

