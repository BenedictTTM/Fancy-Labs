import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Person from './person.models';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://localhost:27017/dash'; // change if needed
app.use(cors());
dotenv.config();
// Middleware
app.use(express.json());

// Basic route
app.get('/', (_req, res) => {
  res.send('API is running...');
});

// src/routes/person.routes.ts


const router = express.Router();

// POST /api/person
router.post('/person', async (req, res) => {
  try {
    const {
      name,
      dateOfBirth,
      department,
      location,
      age,
      gender,
      lastClickedAt
    } = req.body;

    const newPerson = new Person({
      name,
      dateOfBirth,
      department,
      location,
      age,
      gender,
      lastClickedAt
    });

    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(500).json({ message: 'Error creating person', error });
  }
});




// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
