/**
 * File che esplicita il path per raggiungere
 * diversi endpoint del servizio REST
 */
import express from 'express';
import { createNote, getNotes, updateNote, deleteNote }
  from '../controllers/notesController.js';
import { authenticate } from '../middleware/authMiddleware.js'; // Importa il middleware di autenticazione

const router = express.Router();

// il path inizia con /api/notes/...

// protezione delle rotte con il middleware di autenticazione
router.get('/', authenticate, getNotes);
router.post('/', authenticate, createNote);
router.put('/:id', authenticate, updateNote);
router.delete('/:id', authenticate, deleteNote);

export default router;