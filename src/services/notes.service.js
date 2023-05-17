import sequelize, { DataTypes } from '../config/database';
const Note = require('../models/notes')(sequelize, DataTypes);
//add new note
export const addNote1 = async (body) => {
    const data = await Note.create(body);
    return data;
};

//get all notes
export const allNotes = async (UserID) => {
    const data = await Note.findAll({ where: { UserID: UserID } });
    return data;
};