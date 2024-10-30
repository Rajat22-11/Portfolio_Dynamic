import express from 'express';
import About from '../models/About.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
