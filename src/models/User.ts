import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema); 