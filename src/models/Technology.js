import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema({
  name: String,
  icon: String,
  color: String
});

const Technology = mongoose.model('Technology', technologySchema, 'technologies');
export default Technology;
