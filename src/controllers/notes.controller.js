
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


/**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const allNotes = async (req, res, next) => {
    try {
        const data = await NotesService.allNotes(req.body.UserID);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All notes fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNote = async (req, res, next) => {
    try {
        const data = await NotesService.getNote(req.params.id, req.body.UserID);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Note fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};
/**
 * Controller to update note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateNote = async (req, res, next) => {
    try {
        const data = await NotesService.updateNote(req.params.id, req.body.UserID, req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Note updated successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to update isArchived Field a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateisArchivedField = async (req, res, next) => {
    try {
        const data = await NotesService.updateisArchivedField(req.params.id, req.body.UserID);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'isArchived update successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateisDeletedField = async (req, res, next) => {
    try {
        const data = await NotesService.updateisDeletedField(req.params.id, req.body.UserID);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'isDelete update successfully'
        });
    } catch (error) {
        next(error);
    }
};
