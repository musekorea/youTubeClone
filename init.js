import app from './app';

const PORT = 4000;

const handleListening = () => {
  console.log('💚 Listening on: http://127.0.0.1:4000');
};

app.listen(PORT, handleListening);
