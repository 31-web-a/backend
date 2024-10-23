import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: { type: String, required: true },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  goal: { type: String, required: true },
  level: { type: String },
  role: {
    type: String,
    default: 'client',
    enum: ['client', 'coach'],
    required: true,
  },
});

export default model('User', userSchema);
