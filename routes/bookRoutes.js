const express = require('express');
const Book = require('../models/bookModel');
const router = express.Router();

// Fetch all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Fetch a single book by ID
router.get('/:id', async (req, res) => {
  try {
    const bookId = req.params.id.trim();  // Trim the ID
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new book
router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a book by ID
router.put('/:id', async (req, res) => {
  try {
    const bookId = req.params.id.trim();  // Trim the ID
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const bookId = req.params.id.trim();  // Trim the ID
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(204).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
