const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// API routes
app.use('/api/books', bookRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Full-Featured RESTful API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
