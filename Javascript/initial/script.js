// Variables
const username = "Francis"; 
// création d'une variable de type chaine "username" de valeur "francis"
const lastname = "Huster"; 
// création d'une variable de type chaine "lastname" de valeur "Huster"
let age = 30; 
// création d'une variable de type integer "age" de valeur "30"
const boolean = false; 
// création d'une variable de type boolean appelé "boolean" de valeur "false"
console.log(boolean); 
// afficher dans la console la variable "boolean"
console.log(username); 
// afficher dans la console la variable "username"
console.log(age); 
// afficher dans la console la variable "age"
const ageToString = age.toString(); 
// création d'une variable "ageToString" qui a comme valeur une fonction "age.toString()" qui renvoie une chaîne de caractères représentant la valeur de la constante "age"
console.log(ageToString) 
// afficher dans la console le variable "ageToString" resultant de la fonction "age.toString()"
const tableauEncorePlusCon = ["Francis", "Huster", "Jean", "Jacques"]
// création d'un tableau "tableauEncorePlusCon" ayant comme valeur : "francis", "Huster", "Jean", "Jacques"
console.log(tableauEncorePlusCon[0])
// afficher dans la console la case "0" du tableau "tableauEncorePlusCon" ici "Francis"
const objects = {
    name: "Francis",
    lastname: "Huster"
}
// création d'une variable ayant comme proprietés les attributs "name" de valeur "francis" et "lastname" de valeur "huster"
console.log(objects.lastname)
 // afficher dans la console la valeur de "lastname" de la fonction "objets"
const usersProfils = [
    {
        name: "Francis",
        lastname: "Huster",
        age: 76
    },
    {
        name: "Jean",
        lastname: "Jacques",
        age: 56
    }
]
 //Création de tableaux usersProfils et products qui contiennent des objets.
 // 1er objet ayant comme attibut "name" de valeur "francis", l'attribut "lastname" de valeur "Huster" et l'attribut "age" de valeur "76"
 // 2eme objet ayant comme attribut "name" de valeur "jean", l'attribut "lastname" de valeur "Jacque" et l'attribut "age" de valeur "56"
const products = [
    {
        name: "Shampooing",
        description: "Un super shampooing",
        price: 3.40
    },
    {
        name: "Granola",
        description: "OOOH des granolas",
        price: 4.50
    },
    {
        name: "Coca",
        price: 4.50
    }
]
 
function disBonjour(name, lastname) {
    return `Bonjour ${name} ${lastname}`;
}
// déclaration d'une fonction "disbonjour" ayant comme arguments "name" et "lastname"
// cette fonction a comme instruction "return" qui met fin à l'execution de la fonction et definit la valeur renvoyé. ici : "bonjour + name + lastname "
 
const transformValue = (age) => {
    return age.toString();
}
// declaration d'une fonction "transformValue" ayant comme argument "age"
// cette fonction a comme instruction "return" qui renvoie la valeur de la variable "age" en chaine de caractere

 
const disBonjourCorrectement = (name, lastname, age) => {
    return console.log(`Bonjour ${name} ${lastname} tu as ${transformValue(age)} ans`);
}
// declaration de la variable "disBonjourCorrectement" ayant comme arguments "name", "lastname" et "age"
// cette fonction a comme instruction "return" qui revoie vers l'affichge dans la console le message "bonjour + "name" + "lastname" + "tu as" + le resultat de la fonction "transformValue"      " 

const ageOk = transformValue(25);
// declaration d'une fonction "ageOk" ayant comme parametre "transformValue" de valeur 25 
console.log(ageOk)
// appelle de la fonction "ageOk"
const displayArray = (tableauALaCon) => {
    tableauALaCon.forEach(suzette => {
        console.log(suzette)
    });
}
console.log(disBonjourCorrectement(username, lastname, age));
displayArray(tableauEncorePlusCon)
 
const displayUsers = (profils) => {
    profils.forEach(user => {
        disBonjourCorrectement(user.name, user.lastname, user.age)
    })
}
 
const displayProducts = (products) => {
    // products.forEach(product => {
    //     productDetails(product)
    // })
    for (let index = 0; index < products.length; index++) {
        productDetails(products[index]);
    }
}
 
const productDetails = (product) => {
    const description = `Le produit ${product.name} est aux prix de ${product.price}`
    product.description
        ? console.log(`${description} et voici la description ${product.description}`)
        : console.log(description)
}
 
displayUsers(usersProfils);
displayProducts(products);
 
const categories = [
    "Categorie 1",
    "Categorie 2",
    "Categorie 3",
    "Categorie 4",
    "Categorie 5",
]
 
// afficher toutes categories d'un forum
// nom de la fonction displayAllCatgories
// j'ai besoin d'une liste avec toutes les catégories
// nom de la fonction + paramètres displayAllCategroies(allCategories)
const displayAllCategroies = (allCategories) => {
    // je dois faire ressortir chaque nom de la liste
    // pour chaque
    allCategories.forEach(cat => {
        // afficher dans la console la categorie
        console.log(cat)
    })
 
}
 
displayAllCategroies(categories)