import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/database';
import { ResultSetHeader } from 'mysql2';

// change your jwt_secret //
const SECRET = 'your_jwt_secret';

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const [result] = await db.query<ResultSetHeader>('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [
            username,
            email,
            hashedPassword,
        ]);

        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'User registration failed' });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const [rows]: any = await db.query('SELECT id, username, email, password FROM users WHERE email = ?', [email]);
        const user = rows[0];

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Login failed' });
    }
};
