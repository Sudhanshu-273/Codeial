const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

const db = require('./config/mongoose');

const User = require('./models/user');

// use express router

app.use(express.urlencoded());
app.use(cookieParser());

app.use('/', require('./routes'));



app.use(express.static('assets'));

//set up the view engine

app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }

    console.log(`Server is up and running on port : ${port}`);

})