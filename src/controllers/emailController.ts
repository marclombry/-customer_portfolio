import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const sendEmails = async (req: Request, res: Response) => {
    const { emails, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password',
            },
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: emails.join(','),
            subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send emails' });
    }
};
