import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connection.on('open', () => {
  console.log(`Database connected 🟢`);
});

mongoose.connection.on('disconnected', () => {
  console.error(`Database disconnected 🔴`);
});

// TODO: hacer un if para apuntar a mongodb o a localhost dependiendo del env en el que se ejecuta
mongoose.connect('mongodb://mongo:27017');
