import client from 'prom-client';

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const requestCounter = new client.Counter({
  name: 'node_request_operations_total',
  help: 'The total number of processed requests',
});

const requestDuration = new client.Histogram({
  name: 'node_request_duration_seconds',
  help: 'Histogram of request durations in seconds',
  buckets: [0.1, 0.5, 1, 2.5, 5, 10] // Adjust buckets according to expected request duration
});

export { requestCounter, requestDuration };
