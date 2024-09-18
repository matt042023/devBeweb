// définir une fonction exportée appelée welcome. Cette fonction prend deux arguments, request et response, qui sont probablement des objets utilisés dans un environnement serveur, comme dans une application web. La fonction est destinée à gérer une requête HTTP, généralement pour une route spéci
exports.welcome = (request, response) => {
    response.status(200).json({message : "Bienvenue sur l'application"})
};
