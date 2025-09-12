import mongoose from 'mongoose';

const FrequencySchema = new mongoose.Schema({
  count: { type: Number, default: 1 },
  interval: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true }
});

export default FrequencySchema; 
