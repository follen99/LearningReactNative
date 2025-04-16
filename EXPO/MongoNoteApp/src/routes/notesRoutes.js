import express from 'express';
import { createNote, getNotes, updateNote, deleteNote }
  from '../controllers/notesController.js';

const router = express.Router();

// il path inizia con /api/notes/...

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;