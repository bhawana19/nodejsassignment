exports.getGreetingMessage = (req, res, next) => {
    res.render('pages/greetings', {

        pageTitle: 'Greetings',   
        path: '/greetings'
    });
};