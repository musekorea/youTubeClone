import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

function handleOpen() {
  console.log(`🔗connected to DB`);
}
function handleError(error) {
  console.log(`💥Error on DB Connection:${error}`);
}
db.once('open', handleOpen);
db.on('error', handleError);
