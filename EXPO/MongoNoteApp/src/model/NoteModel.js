import mongoose from 'mongoose';
/*
every note has a title and content
 */
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }, // associo la nota ad uno specifico account
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);
export default Note;