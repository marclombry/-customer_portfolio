import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import { db } from '../config/database';

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS, 
  },
});

export const sendEmail = async (req: Request, res: Response) => {
  const { subject, message, customerIds }: { subject: string, message: string, customerIds: number[] } = req.body;

  try {
    let query = 'SELECT email FROM customers WHERE id IN (?)';
    let queryParams = [customerIds];

    if (customerIds.length === 0) {
      query = 'SELECT email FROM customers';
      queryParams = [];
    }

    const [rows]: any = await db.query(query, queryParams);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'No customers found for the specified IDs' });
    }

    const emailPromises = rows.map((customer: { email: string }) => {
      return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: customer.email,
        subject: subject,
        text: message,
      });
    });

    await Promise.all(emailPromises);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
};
