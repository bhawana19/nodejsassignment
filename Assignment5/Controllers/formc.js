const Username = require('./username');
exports.getUserForm = (req, res, next) => {

    res.render('pages/form', {

        pageTitle: 'Form',   
        path: '/form'
    });
};

exports.postAddUsername = (req, res, next) => {
   
    const username = req.body.userName;
    console.log(username);

  
    Username.create({ user: username })
        .then( result => { 
            res.redirect('/'); 
        })
        .catch( err => {
            console.log(err);
        }); 
};