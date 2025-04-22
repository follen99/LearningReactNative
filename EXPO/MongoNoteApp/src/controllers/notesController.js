import Note from '../model/NoteModel.js';

export const createNote = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user ID in req.user
  
    const note = new Note({
      /*
      con i tre puntini (...) prendo i campi che mi servono dal body della richiesta
      */
      ...req.body,  
      user: userId, // aggiungo anche l'ID dell'utente alla nota
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user ID in req.user
    
    const notes = await Note.find({ user: userId });  // filtra le note per l'utente
    if (!notes) {
      return res.status(404).json({ message: "No notes found" });
    }
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};