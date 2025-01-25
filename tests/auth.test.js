const request = require('supertest');
const app = require('../app'); 

describe('POST /api/auth/login', () => {
    it('should return 200 for valid credentials', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ username: 'user', password: 'pass' });
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Login successful');
    });

    it('should return 401 for invalid credentials', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ username: 'user', password: 'wrongpass' });
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe('Invalid credentials');
    });
});