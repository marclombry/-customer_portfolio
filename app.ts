import express from 'express';
import authRoutes from './src/routes/authRoutes'
import clientRoutes from './src/routes/clientRoutes';
import emailRoutes from './src/routes/emailRoutes';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/emails', emailRoutes);

export default app;