const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  publishedYear: Number,
  genre: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
