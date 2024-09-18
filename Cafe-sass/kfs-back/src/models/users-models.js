const fs = require("fs").promises;
const pathData = "./src/data/sassKf.json"

exports.getAllUsers = async () => {
    let users;
    await fs.readFile(pathData).then(data => {
        const manipulationData = JSON.parse(data);
        users = manipulationData.users;
        return users
    }).catch(error => {
        throw new Error("Erreur dans l'affichage des utilisateur")
    })
    return users
}


exports.getByName = async (username) => {
    try {
        const data = await fs.readFile(pathData);
        const manipulationData = JSON.parse(data);
        const user = manipulationData.users.find(user => user.username === username);
        return user;
    } catch (error) {
        throw new Error("Erreur de recherche de l'utilisateur par nom");
    }
}

exports.createdUser = async (user) => {
    await fs.readFile(pathData).then(data => {
        const manipulationData = JSON.parse(data);
        const lastUser = manipulationData.users[manipulationData.users.length -1]
        console.log(lastUser)
        user["id"] = lastUser.id + 1
        manipulationData.users.push(user);
        fs.writeFile(pathData, JSON.stringify(manipulationData)).then(() => {
            console.log("ok")
        }).catch(error => {
            throw new Error("Erreur lors de l'ecriture")
        })
    }).catch(error => {
        throw new Error("Erreur au moment de la lecture du produit")
    })
}



exports.deleteUserByName = async (name) => {
    try {
        const data = await fs.readFile(pathData, 'utf8');
        const manipulationData = JSON.parse(data);
        const index = manipulationData.users.findIndex(user => user.username === name);

        if (index !== -1) {
            const deletedUser = manipulationData.users.splice(index, 1)[0];
            await fs.writeFile(pathData, JSON.stringify(manipulationData, null, 2));
            console.log("Utilisateur supprimé");
            return deletedUser;
        } else {
            throw new Error("Utilisateur non trouvé");
        }
    } catch (error) {
        throw new Error("Erreur lors de la suppression de l'utilisateur : " + error.message);
    }
};

exports.upDatedUserByName = async (name, newContent) => {
    try {
        const data = await fs.readFile(pathData, 'utf8');
        const manipulationData = JSON.parse(data);
        const userFound = manipulationData.users.find(user => user.username === name);
        
        if (userFound) {
            if (newContent.username) {
                userFound.username = newContent.username;
            }
            if (newContent.email) {
                userFound.email = newContent.email;
            }
            
            await fs.writeFile(pathData, JSON.stringify(manipulationData, null, 2));
            console.log("Utilisateur mis à jour correctement sans problème");
            return userFound;
        } else {
            return null; // Retournez null si l'utilisateur n'est pas trouvé
        }
    } catch (error) {
        console.error(error);
        throw new Error("Erreur lors de la mise à jour de l'utilisateur : " + error.message);
    }
};


