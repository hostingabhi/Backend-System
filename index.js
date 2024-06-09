import express from 'express';
import mongoose from 'mongoose';
import client from 'prom-client';
import authRoutes from './routes/auth.js';
import requestRoutes from './routes/requests.js';
import logger from './middleware/logger.js';
import monitorRequests from './middleware/monitoring.js';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/backend-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(logger);
app.use(monitorRequests);  // Add the monitoring middleware

app.use('/auth', authRoutes);
app.use('/requests', requestRoutes);

app.get('/status', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
