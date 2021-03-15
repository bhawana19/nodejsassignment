
const express =require('express');
const bodyParser =require('body-parser');
const path = require('path');

const errorController = require('./controllers/errorc');
const greetingsRoutes = require('./routes/greetings');
const formRoute = require('./routes/form');
const usersRoute = require('./routes/users');


app.use(bodyParser.urlencoded({extended: false}));

const sequelizeNodeJSDB = require('./database');
const Usersnames = require('./username');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(greetingsRoutes);
app.use(formRoute);
app.use(usersRoute);
app.use(errorController.get404);

sequelizeNodeJSDB
    .sync()     
    .then(result => { 
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
