import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Create a new user profile
router.post('/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    console.log('User created:', savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Verify user credentials
router.get('/', async (req, res) => {
  try {
    const filter = {};
    filter.email = req.query.email;
    filter.password = req.query.password;

    console.log('Filter:', filter);

    const user = await User.find(filter);
    console.log('User found:', user);

    res.json(user._id);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});