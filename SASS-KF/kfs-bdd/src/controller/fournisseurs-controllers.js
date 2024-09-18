const  {getAllFournisseursDB, getFournisseurByNameDB, createFournisseurDB, deleteFournisseurByNameDB, updateFournisseurByNameDB, getProduitByIdFournisseurDB } = require("../model/fournisseur-models")

exports.getAllFournisseurs = async (req, res) => {
    try {
        const allFournisseurdb = await getAllFournisseursDB();
        res.status(200).json(allFournisseurdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getFournisseurByName = async (req, res) => {
    try {
        console.log("Update fournisseur by name route hit!");
        const fournisseurName = req.params.name; 
        const fournisseur = await getFournisseurByNameDB(fournisseurName);
        
        if (fournisseur) {
            res.status(200).json(fournisseur);
        } else {
            res.status(404).json({ error: "fournisseur not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createFournisseur = async (req, res) => {
    try {
        const fournisseurData = req.body; 
        const fournisseurId = await createFournisseurDB(fournisseurData);
        res.status(201).json({ id: fournisseurId, message: "Fournisseur created successfully" });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.deleteFournisseurByName = async (req, res) => {
    try {
        const fournisseurName = req.params.name; 
        const affectedRows = await deleteFournisseurByNameDB(fournisseurName);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Fournisseur deleted successfully" });
        } else {
            res.status(404).json({ error: "Fournisseur not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateFournisseurByName = async (req, res) => {
    try {
        const fournisseurName = req.params.name; 
        const updatedFournisseurData = req.body;
        const affectedRows = await updateFournisseurByNameDB(fournisseurName, updatedFournisseurData);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Fournisseur updated successfully" });
        } else {
            res.status(404).json({ error: "Fournisseur not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getProduitByIdFournisseur = async (req, res) => {
    try {
        console.log("affichage produit by Id  fournisseur!");
        const fournisseurId = req.params.Id;  
        const produit = await getProduitByIdFournisseurDB(fournisseurId);

        if (produit.length > 0) {
            res.status(200).json(produit);
        } else {
            res.status(404).json({ error: "produit not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};