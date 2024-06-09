import amqplib from 'amqplib';

let connection;
let channel;

async function connect() {
  connection = await amqplib.connect('amqp://localhost');
  channel = await connection.createChannel();
}

async function createQueue(queueName) {
  if (!channel) {
    await connect();
  }
  await channel.assertQueue(queueName, { durable: true });
}

async function sendToQueue(queueName, message) {
  if (!channel) {
    await connect();
  }
  await channel.sendToQueue(queueName, Buffer.from(message), { persistent: true });
}

async function consumeQueue(queueName, callback) {
  if (!channel) {
    await connect();
  }
  await channel.consume(queueName, (msg) => {
    if (msg !== null) {
      callback(msg.content.toString());
      channel.ack(msg);
    }
  });
}

export { createQueue, sendToQueue, consumeQueue };
