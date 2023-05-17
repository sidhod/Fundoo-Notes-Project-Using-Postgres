"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newNoteValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newNoteValidator = function newNoteValidator(req, res, next) {
  var schema = _joi["default"].object({
    Title: _joi["default"].string().min(2).optional(),
    Descreption: _joi["default"].string().min(2).optional(),
    Color: _joi["default"].string().optional(),
    isArchived: _joi["default"]["boolean"]().optional(),
    isDeleted: _joi["default"]["boolean"]().optional()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
exports.newNoteValidator = newNoteValidator;