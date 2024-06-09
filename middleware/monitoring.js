import { requestCounter, requestDuration } from '../services/monitoringService.js';

const monitorRequests = (req, res, next) => {
  const end = requestDuration.startTimer();
  
  res.on('finish', () => {
    requestCounter.inc();
    end();
  });

  next();
};

export default monitorRequests;
