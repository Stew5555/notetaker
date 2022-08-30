// dependencies
const path = require('path');
const fs = require("fs");

// calling for uniqid from npm package
var uniqid = require('uniqid');

// routing files
module.exports = (app) => {
    // reads the db.json file and returns notes as JSON
    app.get('/api/notes', (req, res) =>{
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });
    // adds new note to the db.sjon file and returns to client
    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);

        let useNotes = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };
        // sends notes to be written in db.json
        db.push(useNotes);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
    });

};