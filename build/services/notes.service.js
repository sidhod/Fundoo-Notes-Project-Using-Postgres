"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateisArchivedField = exports.updateNote = exports.getNote = exports.allNotes = exports.addNote1 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = _interopRequireWildcard(require("../config/database"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Note = require('../models/notes')(_database["default"], _database.DataTypes);
//add new note
var addNote1 = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Note.create(body);
        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addNote1(_x) {
    return _ref.apply(this, arguments);
  };
}();

//get all notes
exports.addNote1 = addNote1;
var allNotes = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(UserID) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Note.findAll({
            where: {
              UserID: UserID
            }
          });
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function allNotes(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

//get single note
exports.allNotes = allNotes;
var getNote = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, UserID) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Note.findAll({
            where: {
              id: id,
              UserID: UserID
            }
          });
        case 2:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getNote(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

//update single Note
exports.getNote = getNote;
var updateNote = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, UserID, body) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Note.update(body, {
            where: {
              id: id,
              UserID: UserID
            }
          });
        case 2:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateNote(_x5, _x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

//update isArchived Note
exports.updateNote = updateNote;
var updateisArchivedField = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, UserID) {
    var note, update, data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return User.findAll({
            where: {
              id: id,
              UserId: UserID
            }
          });
        case 2:
          note = _context5.sent;
          if (note.isArchived === true) {
            update = {
              isArchived: false
            };
          } else {
            update = {
              isArchived: true
            };
          }
          _context5.next = 6;
          return Note.update(update, {
            where: {
              id: id,
              UserID: UserID
            }
          });
        case 6:
          data = _context5.sent;
          return _context5.abrupt("return", data);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function updateisArchivedField(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateisArchivedField = updateisArchivedField;