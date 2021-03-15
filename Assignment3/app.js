
const express =require('express');
const bodyParser =require('body-parser');
const path = require('path');


const usersRoutes= require('./routes/users.js');
const createRoutes= require('./routes/create.js');
const greetingsRoutes= require('./routes/greetings.js');

app.use(bodyParser.urlencoded({extended: true}));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(createRoutes);
app.use(usersRoutes);
app.use(greetingsRoutes);

app.use((req,res,next)=>
{
    res.status(404).send("<h1>Page not found</h1>");
});


app.listen(3000);