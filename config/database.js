import mongoose from 'mongoose';

mongoose.connection.on('open', () => {
  console.log(`Database connected 🟢`);
});

mongoose.connection.on('disconnected', () => {
  console.error(`Database disconnected 🔴`);
});

mongoose.connect('mongodb://localhost:27017');
