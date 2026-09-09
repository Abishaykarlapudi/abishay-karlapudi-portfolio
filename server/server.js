import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});
const ContactMessage = mongoose.model('ContactMessage', contactSchema);

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) return res.status(400).json({ error: 'All fields are required.' });
    await ContactMessage.create({ name, email, subject, message });
    res.status(201).json({ success: true, message: 'Thanks! Your message has been received.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to save your message.' });
  }
});

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) console.warn('MONGODB_URI is not set. Contact submissions will not work until MongoDB is configured.');
else mongoose.connect(mongoUri).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection failed:', err.message));

app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
