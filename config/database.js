import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connection.on('open', () => {
  console.log(`Database connected 🟢`);
});

mongoose.connection.on('disconnected', () => {
  console.error(`Database disconnected 🔴`);
});

// const NODE_ENV = process.env.NODE_ENV || 'development';

// TODO: hacer un if para apuntar a mongodb o a localhost dependiendo del env en el que se ejecuta

const URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
// NODE_ENV === 'development' ? 'mongodb://localhost:27017' : process.env.MONGO_URI
// 'mongodb://localhost:27017'

mongoose.connect(URI);
