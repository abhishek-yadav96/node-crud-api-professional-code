/// # Logic for user routes


// controllers/userController.js
const User = require('../models/userModel');
const logger = require('../utils/logger');

// Create user
exports.createUser = async (req, res) => {
    try {
        const { name, age } = req.body;
        const user = new User({ name, age });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        logger.error('Error creating user:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        logger.error('Error fetching users:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        logger.error('Error fetching user:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        logger.error('Error updating user:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        logger.error('Error deleting user:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
