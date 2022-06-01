'use strict';
const logger = require('./src/middleware/logger');

describe('Logger Test', () => {
  let consoleSpy;
  let re = {};
  let res = {};
  let next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });
  it('should log the request', () => {
    re.method = 'GET';
    re.path = '/person/:name';
    logger(re, res, next);
    expect(consoleSpy).toHaveBeenCalledWith('Request: GET /person/:name');
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
});
