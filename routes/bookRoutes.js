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
  const book = await Book.findById(req.params.id);
  res.json(book);
});

// Create a new book
router.post('/', async (req, res) => {
  const newBook = await Book.create(req.body);
  res.status(201).json(newBook);
});

// Update a book
router.put('/:id', async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBook);
});

// Delete a book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).json({ message: 'Book deleted' });
});

module.exports = router;
