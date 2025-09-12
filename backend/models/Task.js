import mongoose from 'mongoose';
import { Frequency } from './Frequency.js';

const TaskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  difficulty: { type: Number, default: 1 },
  tracking: { type: Boolean, default: false },
  category: { type: String, enum: ['value', 'enjoyment', 'routine'], required: true },
  frequency: { type: Frequency, default: null },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Task', TaskSchema);
