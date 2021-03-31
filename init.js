import app from './app';

const PORT = 8080;

const handleListening = () => {
  console.log('💚 Listening on: http://127.0.0.1:8080');
};

app.listen(PORT, handleListening);
