import mongoose, { Schema, Document } from 'mongoose';

export interface IPerson extends Document {
  name: string;
  dateOfBirth: Date;
  department: string;
  location: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  lastClickedAt: Date;
  createdAt: Date;
}

const PersonSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    department: { type: String, required: false },
    location: { type: String, required: false },
    age: { type: Number, required: false },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    lastClickedAt: { type: Date, default: null }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export default mongoose.model<IPerson>('Person', PersonSchema);
