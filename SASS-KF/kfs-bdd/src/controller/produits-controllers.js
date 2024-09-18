const  {getAllProduitsDB, getProduitsByNameDB, createProduitDB, deleteProduitByNameDB, updateProduitByNameDB } = require("../model/produits-models")

exports.getAllProduits = async (req, res) => {
    try {
        const allProduitsdb = await getAllProduitsDB();
        res.status(200).json(allProduitsdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getProduitByName = async (req, res) => {
    try {
        console.log("Update produit by name route hit!");
        const produitName = req.params.name; 
        const produit = await getProduitsByNameDB(produitName);
        
        if (produit) {
            res.status(200).json(produit);
        } else {
            res.status(404).json({ error: "produit not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createProduit = async (req, res) => {
    try {
        const produitData = req.body; 
        const ProduitId = await createProduitDB(produitData);
        res.status(201).json({ id: ProduitId, message: "Produit created successfully" });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.deleteProduitByName = async (req, res) => {
    try {
        const produitName = req.params.name; 
        const affectedRows = await deleteProduitByNameDB(produitName);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Produit deleted successfully" });
        } else {
            res.status(404).json({ error: "Produit not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateProduitByName = async (req, res) => {
    try {
        const produitName = req.params.name; 
        const updatedProduitData = req.body;
        const affectedRows = await updateProduitByNameDB(produitName, updatedProduitData);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Produit updated successfully" });
        } else {
            res.status(404).json({ error: "Produit not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

