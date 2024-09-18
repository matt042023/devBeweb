const cors = require("cors");
const express = require('express');
const productsRoutes = require("./routes/products-routes")
const UserRoutes = require("./routes/users-routes")
const bodyParser = require("body-parser");

const app = express();

require('dotenv').config()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json());

app.use("/products", productsRoutes);
app.use("/users", UserRoutes);



app.listen(port, () => {
    console.log(`L'application tourne sur le port ${port}`)
})