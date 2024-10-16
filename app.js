const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
// const favicon = require('serve-favicon'); // Remove this line
const path = require('path');

dotenv.config();

connectDB();

const app = express();

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // Remove or comment this line
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());


app.use('/api/books', bookRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Full-Featured RESTful API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
