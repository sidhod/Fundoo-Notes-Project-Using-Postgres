import Joi from '@hapi/joi';

export const newNoteValidator = (req, res, next) => {
    const schema = Joi.object({
        Title: Joi.string().min(2).optional(),
        Descreption: Joi.string().min(2).optional(),
        Color: Joi.string().optional(),
        isArchived: Joi.boolean().optional(),
        isDeleted: Joi.boolean().optional(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        req.validatedBody = value;
        next();
    }
};
