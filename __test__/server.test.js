'use strict';
const server = require('./src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Server Test', () => {
  it('should return 200', async () => {
    const response = await request.get('/person/:name');
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });
  it('should return 404 / bad route', async () => {
    const response = await request.get('/person/bad');
    expect(response.status).toBe(404);
  });
  it('should return 404 / bad method', async () => {
    const response = await request.post('/person/:name');
    expect(response.status).toBe(404);
  });
  it('should return 500', async () => {
    const response = await request.get('/person/',);
    expect(response.status).toBe(500);
  });
});
