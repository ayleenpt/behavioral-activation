import mongoose from 'mongoose';

const TaskLogSchema = new mongoose.Schema({
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true},
  date: { type: Date, required: true },
  tracking: { type: Boolean, required: true },
  logged: { type: Boolean, default: false }
}, {
  timestamps: true
});

TaskLogSchema.index({ task: 1, date: 1 }, { unique: true });

export default mongoose.model('TaskLog', TaskLogSchema);
