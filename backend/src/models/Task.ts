import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    id: {type: String, unique: true, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default model('Task', taskSchema);