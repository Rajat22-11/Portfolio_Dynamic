import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  resumeLink: { type: String, required: true },
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;
