const request = require('supertest');
const app = require('../app');

describe('GET /api/predictions', () => {
    it('should return predictions', async () => {
        const response = await request(app).get('/api/predictions');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});