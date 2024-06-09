// workers/requestWorker.js
import { consumeQueue } from '../services/queueService.js';
import mongoose from 'mongoose';
import User from '../models/User.js';

async function processRequest(message) {
  const { request, userId } = JSON.parse(message);
  try {
    // Handle the request here
    console.log(`Processing request for user ${userId}: ${request}`);
  } catch (error) {
    console.error(`Failed to process request for user ${userId}: ${error.message}`);
    // Optionally requeue the message or handle the failure as required
  }
}


async function startWorker() {
  await mongoose.connect('mongodb://localhost:27017/backend-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const userIds = await User.find().select('_id');
  userIds.forEach((user) => {
    const queueName = `queue_${user._id}`;
    consumeQueue(queueName, processRequest);
  });
}

startWorker().catch(console.error);
