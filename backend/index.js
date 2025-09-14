import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tasksRouter from './routes/tasks.js';
import taskLogRouter from './routes/tasklog.js';
import './jobs/DailyTaskLogJob.js';

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/behavioral_activation';

app.use(cors());
app.use(express.json());

app.use('/api/tasks', tasksRouter);
app.use('/api/tasklog', taskLogRouter);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
