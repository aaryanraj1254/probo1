const request = require('supertest');
const app = require('../app');

describe('POST /api/opinions', () => {
    it('should create an opinion and return 201', async () => {
        const response = await request(app)
            .post('/api/opinions')
            .send({ content: 'Great stock!', userId: 1 });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Opinion created');
    });
});