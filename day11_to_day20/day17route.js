import express from 'express';
import { register, login } from '../day17controller.js';

const router = express.Router();

router.use(express.json());


router.post('/register', register);

router.post('/login', login);

export default router;