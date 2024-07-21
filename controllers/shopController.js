// controllers/shopController.js


const Book = require('../models/Book');

exports.getShop = async (req, res) => {
    const books = await Book.find();
    res.render('shop', { title: 'Shop', books: books });
};
