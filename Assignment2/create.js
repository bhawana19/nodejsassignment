const express =require('express');
const router =express.Router();
const fs=require('fs');

router.get('/create',(req, res, next)=>{
    res.send(
        '<form action="/add" method="POST"><input type="text" name="userName"><button type="submit">User Name</form></input></button>'
        );
});

router.post('/add',(req,res, next)=>{
    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });
    req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        const userName=parsedBody.split('=')[1];
        userName=  "\n" + userName+ "\n";
        fs.appendFile('file.txt', userName, err => 
        {
           res.send('User name added to file');
           res.status(302);
            return res.end();
        });
        });
        res.redirect('/');
});
module.exports= router;