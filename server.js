import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

app.post('/api/schedule-demo', async (req, res) => {
  const { firstName, lastName, email, phone, company, portfolioSize } = req.body;

  if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
    return res.status(500).json({
      error: 'SMTP credentials not configured on the server.',
    });
  }

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.DEMO_RECEIVER_EMAIL || process.env.ZOHO_EMAIL,
    subject: `New Demo Request: ${company || firstName + " " + lastName}`,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Portfolio Size:</strong> ${portfolioSize || 'Not specified'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Demo request received and email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email notification.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
