const connection = require("../config/database")

exports.getAlluserDB = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM utilisateur", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const usersDb = JSON.parse(JSON.stringify(rows));
                console.log(usersDb);
                resolve(usersDb);
            }
        });
    });
};

exports.getUserByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM utilisateur WHERE utilisateur.Nom = "${name}"`, (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const userDb = JSON.parse(JSON.stringify(rows));
                console.log(userDb);
                resolve(userDb[0]);
            }
        });
    });
};


exports.createUserDB = (userData) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO utilisateur SET ?", userData, (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("New user created:", result.insertId);
                resolve(result.insertId);
            }
        });
    });
};

exports.deleteUserByNameDB = (name) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM utilisateur WHERE Nom = ?", [name], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("User deleted:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};

exports.updateUserByNameDB = (name, updatedUserData) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE utilisateur SET ? WHERE Nom = ?", [updatedUserData, name], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("User updated:", result.affectedRows);
                resolve(result.affectedRows);
            }
        });
    });
};
