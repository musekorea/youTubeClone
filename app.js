import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { userRouter } from './router';

const app = express();

function handleHome(req, res) {
  res.send(`🧛‍♂️  Hey!  You're in my Home Page`);
}
function handleLogin(req, res) {
  res.send(`👮‍♂️ Hey!! Here is Login Page`);
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.use('/user', userRouter);
app.get('/', handleHome);
app.get('/login', handleLogin);

export default app;
