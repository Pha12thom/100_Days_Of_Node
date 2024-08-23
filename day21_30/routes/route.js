import express, { Router } from 'express';
import { logout, login, register } from '../controllers/controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

export default router;