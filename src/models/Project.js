// src/models/Project.js
import mongoose from 'mongoose';

// Define the schema for the Project
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL or path to the image
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // Array of strings for technologies
    required: true,
  },
});

// Create the model from the schema
const Project = mongoose.model('Project', projectSchema);

export default Project;
