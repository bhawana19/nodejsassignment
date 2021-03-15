
const express =require('express');
const bodyParser =require('body-parser');
const path = require('path');


const formRoute = require('./routes/form');
const usersRoute = require('./routes/users');


app.use(bodyParser.urlencoded({extended: true}));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(formRoute);
app.use(usersRoute);

app.use((req, res, next) => {

    res.sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);
