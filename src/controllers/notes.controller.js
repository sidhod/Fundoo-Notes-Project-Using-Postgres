
import HttpStatus from 'http-status-codes';
import * as NotesService from '../services/notes.service';
/**
 * Controller to create a new note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addNote1 = async (req, res, next) => {
    try {
        const data = await NotesService.addNote1(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Note created successfully'
        });
    } catch (error) {
        next(error);
    }
};