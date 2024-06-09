import request from 'supertest';
import app from '../index.js';

describe('Authentication', () => {
  it('should register a user', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({ username: 'testuser', password: 'testpass' });
    expect(response.status).toBe(201);
  });

  it('should log in a user', async () => {
    await request(app)
      .post('/auth/register')
      .send({ username: 'testuser', password: 'testpass' });
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'testuser', password: 'testpass' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
