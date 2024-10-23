import { model, Schema } from 'mongoose';

const objetiveSchema = new Schema({
  objetiveType: {
    type: String,
    required: true,
  },
  desiredValue: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

const goalSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  objetive: {
    type: objetiveSchema,
    required: true,
  },
  routines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Routine',
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default model('Goal', goalSchema);
