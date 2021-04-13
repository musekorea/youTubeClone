import './db';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import './model/Video';

const PORT = process.env.PORT || 8080;

const handleListening = () => {
  console.log(`💚 Listening on: http://127.0.0.1:${PORT}`);
};

app.listen(PORT, handleListening);
