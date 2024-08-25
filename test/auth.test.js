import mongoose from 'mongoose';
import { expect } from 'chai';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from './day21_30/app.js';
import User from './day21_30/models/usermodel.js';

describe('POST /register', ()=> {
    let mongoServer;

    before(async()=> {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    });

    after(async()=> {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    //clear my test db before each test
    beforeEach(async()=> {
        await User.deleteMany({});
    });

    it(' registers new user', async()=> {

        const userData = {
            name: 'milugo',
            age: 25,
            email: 'milugo@gmail.com',
            password: 'Mypasswordis123'
        };
        const res = await request(app).post('/register').send(userData);


        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('email', 'milugo@gmail.com');

        const user = await User.findOne({ email: 'milugo@gmail.com' });
        expect(user).to.exist;
        expect(user).to.have.property('name', 'milugo');
    });
});
