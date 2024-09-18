const  {getAlluserDB, getUserByNameDB, createUserDB, deleteUserByNameDB, updateUserByNameDB } = require("../model/users-models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAll = async (req, res) => {
    try {
        const allUserdb = await getAlluserDB();
        res.status(200).json(allUserdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getUserByName = async (req, res) => {
    try {
        console.log("Update user by name route hit!");
        const userName = req.params.name; // Supposons que tu passes le nom dans les paramètres de l'URL
        const user = await getUserByNameDB(userName);
        
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "user not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createUser = async (request, response) => {
    try {
        const user = {
            "Nom": request.body.Nom,
            "Prenom" : request.body.Prenom,
            "password": request.body.password,
            "Adresse": request.body.Adresse,
            "Ville": request.body.Ville,
            "codePostal": request.body.codePostal,
            "telephone": request.body.telephone
        };
 
        // Utilisez la fonction await pour hacher le mot de passe de manière synchrone
        const passwordHashed = await bcrypt.hash(user.password, 10);
        user.password = passwordHashed;
        console.log("Mot de passe haché avant l'insertion en base de données:", user.password);
 
        // Utilisez la fonction createUsers du modèle pour créer l'utilisateur
        const userId = await createUserDB(user);
 
        console.log("Utilisateur créé avec succès. ID utilisateur:", userId);
 
        response.status(201).json({ id: userId, message: "L'utilisateur est créé" });
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        response.status(500).json({ error: "Une erreur est survenue lors de la création de l'utilisateur" });
    }
};


exports.deleteUserByName = async (req, res) => {
    try {
        const userName = req.params.name; // Supposons que tu passes le nom utilisateur dans les paramètres de l'URL
        const affectedRows = await deleteUserByNameDB(userName);

        if (affectedRows > 0) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateUserByName = async (req, res) => {
    try {
        const userName = req.params.name; // Supposons que tu passes le nom utilisateur dans les paramètres de l'URL
        const updatedUserData = req.body; // Supposons que tu passes les données mises à jour dans le corps de la requête
        const affectedRows = await updateUserByNameDB(userName, updatedUserData);

        if (affectedRows > 0) {
            res.status(200).json({ message: "User updated successfully" });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.loginUser = async (request, response) => {
    try {
        const user = { "Nom": request.body.Nom, "password": request.body.password };
 
        const userDb = await getUserByNameDB(user.Nom);
 
        if (!userDb) {
            return response.status(404).json({ message: "Cet utilisateur n'existe pas" });
        }
 
        console.log("Mot de passe en base de données:", userDb.password);
        console.log("Mot de passe dans la requête:", user.password);
 
        let storedPassword = userDb.password;
 
        if (userDb.password && user.password) {
            let isPasswordValid;
           
            try {
                isPasswordValid = await bcrypt.compare(user.password, storedPassword);
            } catch (error) {
                console.error("Erreur lors de la comparaison des hachages:", error);
                return response.status(503).json({ message: "Erreur de comparaison du mot de passe" });
            }
 
            console.log("Comparaison des hachages:", isPasswordValid);
 
            if (isPasswordValid) {
                const token = jwt.sign({ "userId": userDb.id, }, process.env.JWT_KEY);
                console.log("Token généré avec succès:", token);
                return response.status(200).json({ "token": token });
            } else {
                console.log("Le mot de passe n'est pas valide");
                return response.status(503).json({ message: "Le mot de passe n'est pas valide" });
            }
        } else {
            console.log("Le mot de passe n'est pas défini correctement dans la base de données ou dans la requête.");
            return response.status(503).json({ message: "Erreur de comparaison du mot de passe" });
        }
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Une erreur est survenue", error: error });
    }
};
