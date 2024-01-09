// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productsRouter = require('./routes/products');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
     
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process on connection error
  }
}


// Call the function to connect to the database
connectToDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
