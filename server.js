import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import About from './src/models/About.js';
import Hero from './src/models/Hero.js';
import Experience from './src/models/Experience.js';
import Project from './src/models/Project.js';
import Settings from './src/models/Settings.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.VITE_MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(cors());
app.use(express.json());

// Serve static files from the `dist` directory
app.use(express.static(path.join(path.resolve(), 'dist')));

// Define your API routes
app.get('/about', async (req, res) => {
  try {
    const about = await About.findOne();
    if (!about) {
      return res.status(404).json({ message: 'About information not found' });
    }
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/hero', async (req, res) => {
  try {
    const hero = await Hero.findOne();
    if (!hero) {
      return res.status(404).json({ message: 'Hero information not found' });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/resume', async (req, res) => {
  try {
    const settings = await Settings.findOne();
    if (!settings) {
      return res.status(404).json({ message: 'Settings not found' });
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/resume', async (req, res) => {
  try {
    const settings = await Settings.findOne();
    if (!settings || !settings.link) {
      return res.status(404).json({ message: 'Resume link not found' });
    }
    res.json({ resumeLink: settings.link });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fallback route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
