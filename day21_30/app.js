import express from 'express';
import mongoose from 'mongoose';
import { register } from './controllers/controller.js';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testDB');

app.post('/register', register);

export default app;