"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var notesController = _interopRequireWildcard(require("../controllers/notes.controller"));
var _notes2 = require("../validators/notes.validator");
var _auth = require("../middlewares/auth.middleware");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = _express["default"].Router();
//route to create a new note
router.post('', _notes2.newNoteValidator, _auth.userAuth, notesController.addNote1);

//route to get all a notes
router.get('', _auth.userAuth, notesController.allNotes);

//route to get a single note by their note id
router.get('/:id', _auth.userAuth, notesController.getNote);

//route to update a single note by their note id
router.put('/:id', _notes2.newNoteValidator, _auth.userAuth, notesController.updateNote);

//route to update a isArchived Field by their note id
router.put('/:id/archived', _auth.userAuth, notesController.updateisArchivedField);

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
var _default = router;
exports["default"] = _default;