const express = require('express');
const app = express();
const PORT = 80;
 
app.get('/', (req, res, next) => {
    res.json({
        message: 'Welcom to docker Test'
    });
});
 
app.listen(PORT, () => {
    console.log('App run on port ' + PORT);
});