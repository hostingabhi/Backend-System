import express from 'express';
import auth from '../middleware/auth.js';
import { createQueue, sendToQueue } from '../services/queueService.js';

const router = express.Router();

router.post('/enqueue', auth, async (req, res) => {
  const queueName = `queue_${req.userId}`;
  // console.log("aa",queueName)
  const { request } = req.body;
  await createQueue(queueName);
  await sendToQueue(queueName, JSON.stringify({ request, userId: req.userId }));
  res.send('Request enqueued');
});

export default router;
