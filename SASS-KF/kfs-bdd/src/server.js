const cors = require("cors");
const express = require("express");
const app = express();
const connection = require("./config/database")
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users-routes");
const produitsRoutes = require("./routes/produits-routes");
const fournisseursRoutes = require("./routes/fournisseurs-routes");
const etablissementRoutes = require("./routes/etablissements-routes");
const evenementRoutes = require("./routes/events-routes")
require("dotenv").config();

connection.connect(error => {
  if(error) throw error;
  console.log("connecté a la base de donné")
})

app.use(cors());
app.use(bodyParser.json());
app.use("/users", usersRoutes)
app.use("/produits", produitsRoutes)
app.use("/fournisseurs", fournisseursRoutes)
app.use("/etablissement", etablissementRoutes)
app.use("/events", evenementRoutes)

app.listen(process.env.PORT, () => {
  console.log("l'application tourne sur le port " + process.env.PORT);
});



