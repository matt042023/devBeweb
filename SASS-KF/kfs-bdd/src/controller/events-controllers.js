const  {getAllEvenementsDB, getEvenementByIdDB, createEvenementDB, deleteEvenementByIdDB, updateEvenementByIdDB } = require("../model/events-models")

exports.getAllEvenements = async (req, res) => {
    try {
        const allEvenementsdb = await getAllEvenementsDB();
        res.status(200).json(allEvenementsdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getEvenementById = async (req, res) => {
    try {
        console.log("Update evenement by Id route hit!");
        const evenementId = req.params.Id;  
        const evenement = await getEvenementByIdDB(evenementId);

        if (evenement.length > 0) {
            res.status(200).json(evenement);
        } else {
            res.status(404).json({ error: "Evenement not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createEvenement = async (req, res) => {
    try {
        const evenementData = req.body; 
        const evenementId = await createEvenementDB(evenementData);
        res.status(201).json({ id: evenementId, message: "Evenement created successfully" });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.deleteEvenementById = async (req, res) => {
    try {
        const evenementId = req.params.Id;
        const affectedRows = await deleteEvenementByIdDB(evenementId);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Evenement deleted successfully" });
        } else {
            res.status(404).json({ error: "Evenement not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateEvenementById = async (req, res) => {
    try {
        const evenementId = req.params.Id;
        const updatedEvenementData = req.body;
        const affectedRows = await updateEvenementByIdDB(evenementId, updatedEvenementData);

        if (affectedRows > 0) {
            res.status(200).json({ message: "Evenement updated successfully" });
        } else {
            res.status(404).json({ error: "Evenement not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
