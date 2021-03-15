const express =require('express');
const router =express.Router();
const fs=require('fs');
const path = require('path');

router.get('/',(req, res, next)=>{

    res.render('form', { pageTitle : 'Form' });
});

router.post('/add',(req,res, next)=>{
    const input = [];
    req.on('data',(chunk)=>{
        input.push(chunk);
    });
    req.on('end',()=>{
        const parsedBody = Buffer.concat(input).toString();
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