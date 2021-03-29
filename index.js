import express from 'express';
const app = express();
const PORT = 8080;

function handleHome(req, res) {
  console.log('someone is coming on Local:8080');
  res.send(`🧛‍♂️  Hey!  You're in my Home Page`);
}
function handleLogin(res, req) {
  console.log(`Someone is coming into Login Page`);
  req.send(`👮‍♂️ Hey! Here is Login Page`);
}

function handleListening() {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
}

app.get('/', handleHome);
app.get('/login', handleLogin);
app.listen(PORT, handleListening);
