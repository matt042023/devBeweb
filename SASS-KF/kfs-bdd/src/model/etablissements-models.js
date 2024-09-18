const connection = require("../config/database")

exports.getAllEtablissementsDB = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM etablissement", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const etablissementsDb = JSON.parse(JSON.stringify(rows));
                console.log(etablissementsDb);
                resolve(etablissementsDb);
            }
        });
    });
};

exports.getEtablissementByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM etablissement WHERE etablissement.Nom = "${name}"`, (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const etablissementDb = JSON.parse(JSON.stringify(rows));
                console.log(etablissementDb);
                resolve(etablissementDb);
            }
        });
    });
};


exports.createEtablissementDB = (etablissementData) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO etablissement SET ?", etablissementData, (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("New etablissement created:", result.insertId);
                resolve(result.insertId);
            }
        });
    });
};

exports.deleteEtablissementByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM etablissement WHERE Nom = ?", [name], (error, result) => {
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

exports.updateEtablissementByNameDB = (name, updatedEtablissementData) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE etablissement SET ? WHERE Nom = ?", [updatedEtablissementData, name], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("etablissement updated:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};


