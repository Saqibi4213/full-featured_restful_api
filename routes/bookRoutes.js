const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.get('/:id', async (req, res) => {
  try {
    const bookId = req.params.id.trim();
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(book);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const bookId = req.params.id.trim();
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(updatedBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const bookId = req.params.id.trim();
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(204).json({ message: 'Book deleted' });
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
