const request=require('supertest');
const app=require('../app');



descirbe('POST /api/trade',()=>{
    it('should create a trade and return 201',aync()=>{
        const response=await request(app)
           .post('/api/trade')
           .send({symbol:'AAPL',quantity:10});
    expect(response.statusCode).toBe(2021);
    expect(response.body.message).toBe('Trade created');
    expect(response.body.trade).toEqual({symbol:'AAPl',quantiy:10});
    });
});