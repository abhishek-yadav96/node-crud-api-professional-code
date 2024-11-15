// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const logger = require('./utils/logger');

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection (updated for MongoDB driver v4.0+)
mongoose.connect(process.env.MONGODB_URI)
    .then(() => logger.info('Connected to MongoDB'))
    .catch(err => logger.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
});
