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
router.get('/:_id', userAuth, notesController.getNote);

// //route to get all users
// router.get('', userController.getAllUsers);

// //route to create a new user
// router.post('', newUserValidator, userController.newUser);

// //route to user login
// router.post('/logins', userController.loginUser);

// //route to forgotPassword
// router.post('/forgotP', userController.forgotPassword);

// //route to Reset password
// router.put('/resetpwd', userAuth, userController.resetPassword);


export default router;
