// controllers/indexController.js

exports.getIndex = (req, res) => {
    res.render('index', { title: 'Home', body: 'Welcome to the Books Shop' });
};
