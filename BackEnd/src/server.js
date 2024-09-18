const express = require("express"); //notre application va utiliser require express
const app = express(); // on appel express dans une variable
const baseRoutes = require("./routes/base-routes.js"); //exporter les routes
const productsRoutes = require('./routes/products-routes.js')
const bodyparser = require("body-parser")

app.get("/api", (request, response) => {
    response.status(200).json({message : "bienvenue sur l'application"})
})

app.use(bodyparser.json())
app.use("/base",baseRoutes);
app.use("/products",productsRoutes);

app.listen(3000, () =>{
    console.log("l'application tourne sur le port 3000")
});