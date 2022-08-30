// dependencies
const path = require('path');
const fs = require("fs");

// calling for uniqid from npm package
var uniqid = require('uniqid');

// routing files
module.exports = (app) => {
    app.get('/api/notes', (req, res) =>{
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    
}