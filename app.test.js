const request = require('supertest');
const app = require('./app')

describe('test on app signature static server', ()=>{
    test('it should response to / route',async()=>{
        const response = await request(app).get('/')
        expect(response.status).toBe(200);
    })
    test('should return 404 error if page not found',async ()=>{
        const response = await request(app).get('/noExiste');
        expect(response.status).toBe(404)
    })
})