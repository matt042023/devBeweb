const connection = require("../config/database")

exports.getAllFournisseursDB = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM fournisseur", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const fournisseursDb = JSON.parse(JSON.stringify(rows));
                console.log(fournisseursDb);
                resolve(fournisseursDb);
            }
        });
    });
};

exports.getFournisseurByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM fournisseur WHERE fournisseur.Nom = "${name}"`, (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const fournisseurDb = JSON.parse(JSON.stringify(rows));
                console.log(fournisseurDb);
                resolve(fournisseurDb);
            }
        });
    });
};


exports.createFournisseurDB = (fournisseurData) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO fournisseur SET ?", fournisseurData, (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("New fournisseur created:", result.insertId);
                resolve(result.insertId);
            }
        });
    });
};

exports.deleteFournisseurByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM fournisseur WHERE Nom = ?", [name], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("Fournisseur deleted:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};

exports.updateFournisseurByNameDB = (name, updatedFournisseurData) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE fournisseur SET ? WHERE Nom = ?", [updatedFournisseurData, name], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("Fournisseur updated:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};


exports.getProduitByIdFournisseurDB = (Id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * 
        FROM produits
        WHERE Fournisseur_idFournisseur = ?`, [Id], (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const evenementDb = JSON.parse(JSON.stringify(rows));
                console.log(evenementDb);
                resolve(evenementDb);
            }
        });
    });
};

