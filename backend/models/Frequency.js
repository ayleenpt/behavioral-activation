const Frequency = new mongoose.Schema({
  count: { type: Number, default: 1 },
  interval: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true }
});