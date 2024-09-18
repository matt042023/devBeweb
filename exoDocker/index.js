
//un serveur//
const express = require('express');
const app = express();

// port docker. le numéro est au choix
const PORT = 80;

app.get('/',(req,res,next) => {
    res.json({
        message: 'Welcome to Docker test'
    });
});

app.listen(PORT, () => {
    console.log('App run on port' + PORT);
});
