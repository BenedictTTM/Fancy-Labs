import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Person from './person.models';
import express, { Request, Response } from 'express';

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




// POST /api/person
app.post('/person', async (req, res) => {
  try {
    const {
      name,
      dateOfBirth,
      department,
      location,
      age,
      gender,
      about,
      lastClickedAt
    } = req.body;

    const newPerson = new Person({
      name,
      dateOfBirth,
      department,
      location,
      age,
      gender,
      about,
      lastClickedAt
    });

    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(500).json({ message: 'Error creating person', error });
  }
});


app.delete('/person/:name', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.params;

    // Find and remove the person by their name
    const deletedPerson = await Person.findOneAndDelete({ name });
   console.log(deletedPerson)
  } catch (error) {
      console.log(error)
  }
});




app.get('/persons', async (req, res) => {
    try {
      const persons = await Person.find();
      res.status(200).json(persons);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching persons', error });
    }
  });
  


  app.put('/person/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { about } = req.body;
  
    try {
      const updatedPerson = await Person.findByIdAndUpdate(
        id,
        { about },
        { new: true, runValidators: true }
      );
  
      if (!updatedPerson) {
        res.status(404).json({ message: 'Person not found' });
        return;
      }
  
      res.status(200).json(updatedPerson);
    } catch (error) {
      res.status(500).json({ message: 'Error updating person', error });
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
