import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectToMongo from './src/config/databaseConnection.js';
import notesRoutes from './src/routes/notesRoutes.js';
dotenv.config();
connectToMongo();
const app = express();
const PORT = process.env.PORT || 5000;
const URL = 'http://localhost';

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${URL}:${PORT}`);
});