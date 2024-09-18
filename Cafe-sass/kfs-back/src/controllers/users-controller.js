const {request, response} = require("express")
const {getAllUsers, getByName, createdUser, deleteUserByName, upDatedUserByName} = require("../models/users-models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()

exports.getUsersAll = async(request, response) => {
    try{
        const products = await getAllUsers();
        response.status(200).json(products)
    } catch (error) {
        response.status(500).json({error : "erreur de lecture des utilisateur"})
    }
}

exports.getUserByName = async (request, response) => {
    try {
        const username = request.params.username;
        const user = await getByName(username);
        if (user) {
            response.status(200).json(user);
        } else {
            response.status(404).json({ error: "Utilisateur non trouvé" });
        }
    } catch (error) {
        response.status(500).json({ error: "Erreur de recherche de l'utilisateur par nom" });
    }
}

exports.createUsers = async (request, response) => {
    try {
       const user = {"username": request.body.username, "password": request.body.password}
       await bcrypt.hash(user.password, 10).then(passwordHashed => {
        user.password = passwordHashed;
        createdUser(user);
        response.status(201).json({ message: "L'utilisateur a été ajouté" });
       }).catch (error => {
        response.status(500).json({message: "une erreur est survenue lors de l'encryptage du mot de passe"})
       })  
    } catch (error) {
        console.log(error);
        response.status(501).json({ error: "Erreur lors de la création de l'utilisateur" });
    }
};


exports.deleteUser = async (request, response) => {
    try {
        const username = request.params.username;
        await deleteUserByName(username);
        response.status(204).send();
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erreur lors de la suppression" });
    }
}

exports.upDateUser = async (request, response) => {
    try {
        const username = request.params.username;
        const newContent = request.body;

        if (!newContent.username && !newContent.email) {
            response.status(400).json({ error: "Au moins le nom ou l'email doit être transmis dans la demande du corps" });
            return;
        }

        const user = await upDatedUserByName(username, newContent);

        if (user) {
            response.status(200).json(user);
        } else {
            response.status(404).json({ error: "Utilisateur non trouvé (nom)" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Impossible de mettre à jour, erreur 500 controller" });
    }
};

exports.loginUser = async (request, response) => {
    try {
        const user = {"name": request.body.username, "password": request.body.password};
        await getByName(user.name).then(userDb => {
            console.log(userDb.password)
            bcrypt.compare(user.password, userDb.password).then (isOk => {
                console.log(isOk)
                if(isOk) {
                    console.log("ok")
                    const token = jwt.sign({"userId": userDb.id}, process.env.JWT_KEY)
                    console.log("token:",token)
                    response.status(200).json({"token": token})
                }else {
                    console.log("pas ok")
                    response.status(503).json({ message: "le mdp n'est pas valide"})
                }
            }).catch(error => {
                response.status(500).json({ message : "errur lors de la verification du mdp"})
            })
        }).catch(error => {
            response.status(404).json({ message: "Cette utilisateur n'existe pas"})
        })

    }catch(error){
        response.status(500).json({ message : "Une erreur est survenu", error : error})
    }

};