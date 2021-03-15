const Username = require('./username');
exports.getUsername = (req, res, next) => {
    Username.findAll({
        attributes: ['id', 'user']
        })
        .then( userDetails => {
            res.render('pages/users', {
                pageTitle: 'Information',
                path: '/users',
                userDetails: userDetails,
            });
        }) 
        .catch( err => {
            console.log(err);
        });
};