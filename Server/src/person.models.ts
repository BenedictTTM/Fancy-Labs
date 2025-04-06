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
    name: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: false },
    department: { type: String, required: false },
    about: { type: String, required: false },
    location: { type: String, required: false },
    age: { type: Number, required: false },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    lastClickedAt: { type: Date, default: null }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

// Pre-save hook to check for duplicates
PersonSchema.pre('save', async function (next) {
  const person = this;
  const existingPerson = await mongoose.models.Person.findOne({ name: person.name });
  if (existingPerson) {
    const error = new Error('A person with this name already exists');
    return next(error);
  }
  next();
});

export default mongoose.model<IPerson>('Person', PersonSchema);
