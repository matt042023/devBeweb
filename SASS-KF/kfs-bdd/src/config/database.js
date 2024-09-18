const mysql = require("mysql") // recuperer mysql

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sasskf"
})

module.exports = connection;