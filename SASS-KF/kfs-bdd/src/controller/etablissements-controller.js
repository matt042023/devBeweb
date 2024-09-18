const  {getAllEtablissementsDB, getEtablissementByNameDB, createEtablissementDB, deleteEtablissementByNameDB, updateEtablissementByNameDB } = require("../model/etablissements-models")

exports.getAllEtablissements = async (req, res) => {
    try {
        const allEtablissementdb = await getAllEtablissementsDB();
        res.status(200).json(allEtablissementdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getEtablissementByName = async (req, res) => {
    try {
        console.log("Update etablissement by name route hit!");
        const etablissementName = req.params.name; 
        const etablissement = await getEtablissementByNameDB(etablissementName);
        
        if (etablissement) {
            res.status(200).json(etablissement);
        } else {
            res.status(404).json({ error: "etablissement not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createEtablissement = async (req, res) => {
    try {
        const etablissementData = req.body; 
        const etablissementId = await createEtablissementDB(etablissementData);
        res.status(201).json({ id: etablissementId, message: "Etablissement created successfully" });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.deleteEtablissementByName = async (req, res) => {
    try {
        const etablissementName = req.params.name; 
        const affectedRows = await deleteEtablissementByNameDB(etablissementName);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Etablissement deleted successfully" });
        } else {
            res.status(404).json({ error: "Etablissement not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateEtablissementByName = async (req, res) => {
    try {
        const etablissementName = req.params.name; 
        const updatedEtablissementData = req.body;
        const affectedRows = await updateEtablissementByNameDB(etablissementName, updatedEtablissementData);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Etablissement updated successfully" });
        } else {
            res.status(404).json({ error: "Etablissement not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

