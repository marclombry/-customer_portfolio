import { Request, Response } from 'express';
import { db } from '../config/database';

export const addClient = async (req: Request, res: Response) => {
    const { user_id, name, email, phone, address } = req.body;

    try {
        await db.query(
            'INSERT INTO clients (user_id, name, email, phone, address) VALUES (?, ?, ?, ?, ?)',
            [user_id, name, email, phone, address]
        );

        res.status(201).json({ message: 'Client added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add client' });
    }
};

export const getClients = async (req: Request, res: Response) => {
    const { user_id } = req.params;

    try {
        const [rows] = await db.query('SELECT user_id, name, email, phone, address FROM clients WHERE user_id = ?', [user_id]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch clients' });
    }
};
