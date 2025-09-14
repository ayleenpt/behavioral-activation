import express from 'express';
import TaskLog from '../models/TaskLog.js';

const router = express.Router();

// Update a task log entry
router.put('/', async (req, res) => {
  const { task, date, update } = req.body;

  if (!task || !date) {
    return res.status(400).json({ error: 'Missing task and/or date' });
  }

  try {
    const updatedTaskLog = await TaskLog.findOneAndUpdate(
      { task, date: new Date(date) },
      update,
      { new: true, upsert: false }
    );

    if (!updatedTaskLog) {
      return res.status(404).json({ error: 'Task log not found' });
    }

    res.json(updatedTaskLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete all logs for a specific task
router.delete('/task/:taskId', async (req, res) => {
  const { taskId } = req.params;

  try {
    const result = await TaskLog.deleteMany({ task: taskId });
    res.json({ message: `Deleted ${result.deletedCount} logs for task ${taskId}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;