const express = require('express');

// app uses express

const app = express();

//creates variable port
const PORT = process.env.port || 3001;

//creates route for files in the public folder 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//starts the server
app.listen(PORT, () => { 
    console.log(`app listening at localhost${PORT}`);
});

