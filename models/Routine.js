import { Schema, model } from 'mongoose';

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  seriesNumber: {
    type: Number,
    required: true,
  },
  repetitions: {
    type: Number,
    required: true,
  },
  idealWeight: {
    type: Number,
  },
  periodicity: {
    // TODO
  },
});

const routineSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  exercises: [exerciseSchema],
});
export default model('Routine', routineSchema);
