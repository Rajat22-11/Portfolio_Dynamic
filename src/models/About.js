import mongoose from 'mongoose';

// Define a schema for the About collection
const aboutSchema = new mongoose.Schema({
  about: {
    aboutText: String,
    imageUrl: String
  }
});

// Create a model from the schema and export it
const About = mongoose.model('About', aboutSchema, 'aboutText'); // 'aboutText' is the collection name
export default About;
