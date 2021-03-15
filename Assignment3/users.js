
const express =require('express');
const router =express.Router();
const fs=require('fs');



router.get('/users',(req, res, next)=>{
 if(fs.existsSync('./file.txt')){
    let users = fs.readFileSync('file.txt', 'utf8');
    let len = users.length;
    let arr= users.split('\n');
    arr.pop();
    if(len === 0){
        res.statusCode = 302;
        res.setHeader('Location', '/create');
    }
 }

    
    res.send('List of Users');
    res.send('<ul>');
    for(const i of arr){
        res.send('<li><h3>' + i + '</h3></li>');
    }
});

module.exports= router;