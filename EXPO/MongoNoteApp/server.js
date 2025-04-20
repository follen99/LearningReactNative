import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectToMongo from './src/config/databaseConnection.js';
import notesRoutes from './src/routes/notesRoutes.js';
import accountsRoutes from './src/routes/accountsRoutes.js';



dotenv.config();

// check if the environment variable is set
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not set in the environment variables.');
  process.exit(1); // Exit the process with failure
}

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not set in the environment variables.');
  process.exit(1); // Exit the process with failure
}

connectToMongo();
const app = express();
const PORT = process.env.PORT || 5000;
const URL = 'http://localhost';

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/notes', notesRoutes);
app.use('/api/accounts', accountsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${URL}:${PORT}`);
});