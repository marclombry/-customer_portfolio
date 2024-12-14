import express from 'express';
import { addClient, getClients } from '../controllers/clientController';

const router = express.Router();

router.post('/add', addClient);
router.get('/:user_id', getClients);

export default router;
