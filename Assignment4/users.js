
const express =require('express');
const router =express.Router();
const fs=require('fs');

router.get('/users', (req, res, next) => {

    fs.access('./username.txt', fs.constants.F_OK, (err) => {
        if(err){
            res.render('form', {pageTitle : 'Form'});
        }
        else{
            const users = [];
        
            fs.readFile('file.txt', (err, data) => {
                        
            users.push(...data.toString().split('\n'));
            users.pop();
            
            res.render('users', { pageTitle : 'Information', usernames : users });   
            });
        }   
    });
});

module.exports= router;