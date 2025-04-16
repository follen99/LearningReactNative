import mongoose from 'mongoose';
/*
every note has a title and content
 */
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);
export default Note;