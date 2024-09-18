const connection = require("../config/database")

exports.getAllEvenementsDB = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM evenement", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const evenementsDb = JSON.parse(JSON.stringify(rows));
                console.log(evenementsDb);
                resolve(evenementsDb);
            }
        });
    });
};

exports.getEvenementByIdDB = (Id) => {
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


exports.createEvenementDB = (evenementData) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO evenement SET ?", evenementData, (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("New evenement created:", result.insertId);
                resolve(result.insertId);
            }
        });
    });
};


exports.deleteEvenementByIdDB = (Id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM evenement WHERE idevenement = ?", [Id], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("Evenement deleted:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};

exports.updateEvenementByIdDB = (Id, updatedEvenementData) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE evenement SET ? WHERE idevenement = ?", [updatedEvenementData, Id], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("Evenement updated:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};

