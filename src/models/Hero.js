import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  hero: {
    heroContent: String,
    imageUrl: String
  }
});

const Hero = mongoose.model('Hero', heroSchema, 'heroContent');
export default Hero;
