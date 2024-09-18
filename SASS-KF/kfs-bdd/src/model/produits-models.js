const connection = require("../config/database")

exports.getAllProduitsDB = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM produits", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const modelsDb = JSON.parse(JSON.stringify(rows));
                console.log(modelsDb);
                resolve(modelsDb);
            }
        });
    });
};

exports.getProduitsByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM produits WHERE produits.Nom = "${name}"`, (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const produitDb = JSON.parse(JSON.stringify(rows));
                console.log(produitDb);
                resolve(produitDb);
            }
        });
    });
};


exports.createProduitDB = (produitData) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO produits SET ?", produitData, (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("New produit created:", result.insertId);
                resolve(result.insertId);
            }
        });
    });
};

exports.deleteProduitByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM produits WHERE Nom = ?", [name], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("Produit deleted:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};

exports.updateProduitByNameDB = (name, updatedProduitData) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE produits SET ? WHERE Nom = ?", [updatedProduitData, name], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("Produit updated:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};


exports.getProduitByIdFournisseur = (Id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM evenement WHERE evenement.idevenement = ?`, [Id], (error, rows, fields) => {
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


