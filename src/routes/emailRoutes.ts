import express from 'express';
import { sendEmails } from '../controllers/emailController';

const router = express.Router();

router.post('/send', sendEmails);

export default router;
