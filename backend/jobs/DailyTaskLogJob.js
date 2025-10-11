import cron from 'node-cron';
import Task from '../models/Task.js';
import TaskLog from '../models/TaskLog.js';
import mongoose from 'mongoose';
import { startOfDay } from 'date-fns';

cron.schedule('0 0 * * *', async () => {
  try {
    console.log(`[Cron] Running daily task log job at ${new Date().toISOString()}`);

    const today = startOfDay(new Date());

    const tasks = await Task.find({ tracking: true });

    for (const task of tasks) {
      const existingLog = await TaskLog.findOne({
        task: task._id,
        date: today
      });

      if (!existingLog) {
        await TaskLog.create({
          task: task._id,
          date: today,
          tracking: task.tracking,
          logged: false
        });

        console.log(`Created TaskLog for task: ${task.taskName}`);
      }
    }

    console.log(`[Cron] Daily task log job completed.`);
  } catch (err) {
    console.error(`[Cron Error]`, err);
  }
});
