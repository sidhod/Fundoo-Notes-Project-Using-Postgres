import express from 'express';
import * as notesController from '../controllers/notes.controller';
import { newNoteValidator } from '../validators/notes.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();
//route to create a new note
router.post('', newNoteValidator, userAuth, notesController.addNote1);

//route to get all a notes
router.get('', userAuth, notesController.allNotes);

//route to get a single note by their note id
router.get('/:id', userAuth, notesController.getNote);

//route to update a single note by their note id
router.put('/:id', newNoteValidator, userAuth, notesController.updateNote);

//route to update a isArchived Field by their note id
router.put('/:id/archived', userAuth, notesController.updateisArchivedField);

//route to update a isDelete Field by their note id
router.put('/:id/trash', userAuth, notesController.updateisDeletedField);

export default router;
