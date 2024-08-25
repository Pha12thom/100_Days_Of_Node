import mongoose from 'mongoose';
import { expect } from 'chai';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../path/to/your/app'; // Update with the correct path to your Express app
import User from './models/usermodel'; // Update with the correct path

describe('Auth API', function() {


    // Start an in-memory MongoDB server before running tests
    let mongoServer;
    before(async function() {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect('mongodb://localhost:27017/news-test');
    });

    // Close the connection and stop the MongoDB server after all tests
    after(async() => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    // Clear the database before each test
    beforeEach(async() => {
        await User.deleteMany({});
    });

    it('should register a new user', async function() {
        const res = await request(app)
            .post('/register')
            .send({
                name: 'milugo',
                age: 25,
                email: 'milugo@gmail.com',
                password: 'password123'
            });

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('email', 'milugocom');
    });

    it('should not register a user with an existing email', async function() {
        await new User({
            name: 'Existing User',
            age: 25,
            email: 'existinguser@example.com',
            password: 'password123'
        }).save();

        const res = await request(app)
            .post('/register')
            .send({
                name: 'Test User',
                age: 25,
                email: 'existinguser@example.com',
                password: 'password123'
            });

        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('message', 'User already exists');
    });

    it('should log in an existing user', async function() {
        const hashedPassword = await bcrypt.hash('password123', 10);
        await new User({
            name: 'Test User',
            age: 25,
            email: 'testuser@example.com',
            password: hashedPassword
        }).save();

        const res = await request(app)
            .post('/login')
            .send({
                email: 'testuser@example.com',
                password: 'password123'
            });

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', 'Logged in successfully');
        expect(res.body).to.have.property('token');
    });

    it('should fail to log in with incorrect password', async function() {
        const hashedPassword = await bcrypt.hash('password123', 10);
        await new User({
            name: 'Test User',
            age: 25,
            email: 'testuser@example.com',
            password: hashedPassword
        }).save();

        const res = await request(app)
            .post('/login')
            .send({
                email: 'testuser@example.com',
                password: 'wrongpassword'
            });

        expect(res.status).to.equal(401);
        expect(res.body).to.have.property('message', 'Invalid credentials');
    });

    it('should log out a user', async function() {
        const res = await request(app).post('/logout');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', 'Logged out successfully');
    });
});