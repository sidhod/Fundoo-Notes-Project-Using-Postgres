"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.resetPassword = exports.newUser = exports.loginUser = exports.getUser = exports.getAllUsers = exports.forgotPassword = exports.deleteUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = _interopRequireWildcard(require("../config/database"));
var _logger = _interopRequireDefault(require("../config/logger"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var User = require('../models/user')(_database["default"], _database.DataTypes);
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//get all users
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return User.findAll();
        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

//create new user
exports.getAllUsers = getAllUsers;
var newUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var saltRounds, hash, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          saltRounds = 10;
          hash = bcrypt.hashSync(body.password, saltRounds);
          body.password = hash;
          _context2.next = 5;
          return User.create(body);
        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function newUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//login user
exports.newUser = newUser;
var loginUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var email, data, passwordvalidator, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          email = body.email;
          _logger["default"].info("login email", email);
          _context3.next = 4;
          return User.findAll({
            where: {
              email: email
            }
          });
        case 4:
          data = _context3.sent;
          if (!(data.length !== 0)) {
            _context3.next = 17;
            break;
          }
          _context3.next = 8;
          return bcrypt.compare(body.password, data[0].password);
        case 8:
          passwordvalidator = _context3.sent;
          if (!passwordvalidator) {
            _context3.next = 14;
            break;
          }
          token = jwt.sign({
            email: data[0].email,
            firstName: data[0].firstName,
            id: data[0]._id
          }, process.env.SECRET_KEY);
          return _context3.abrupt("return", token);
        case 14:
          throw new Error('Password Is incorrect.....');
        case 15:
          _context3.next = 18;
          break;
        case 17:
          throw new Error('Email Is incorrect.....');
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function loginUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

//forgot password
exports.loginUser = loginUser;
var forgotPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(body) {
    var data, newtoken;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return User.findAll({
            where: {
              email: body.email
            }
          });
        case 2:
          data = _context4.sent;
          if (!(data.length !== 0)) {
            _context4.next = 8;
            break;
          }
          newtoken = jwt.sign({
            email: data[0].email,
            firstName: data[0].firstName,
            id: data[0]._id
          }, process.env.SECRET_KEY);
          return _context4.abrupt("return", newtoken);
        case 8:
          throw new Error('Email is not found.....');
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function forgotPassword(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

//reset password
exports.forgotPassword = forgotPassword;
var resetPassword = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body, email) {
    var saltRounds, hashPassword;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          saltRounds = 10;
          _context5.next = 3;
          return bcrypt.hash(body.password, saltRounds);
        case 3:
          hashPassword = _context5.sent;
          body.password = hashPassword;
          _context5.next = 7;
          return User.update(body, {
            where: {
              email: email
            }
          });
        case 7:
          return _context5.abrupt("return", body);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function resetPassword(_x4, _x5) {
    return _ref5.apply(this, arguments);
  };
}();

//update single user
exports.resetPassword = resetPassword;
var updateUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, body) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return User.update(body, {
            where: {
              id: id
            }
          });
        case 2:
          return _context6.abrupt("return", body);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateUser(_x6, _x7) {
    return _ref6.apply(this, arguments);
  };
}();

//delete single user
exports.updateUser = updateUser;
var deleteUser = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return User.destroy({
            where: {
              id: id
            }
          });
        case 2:
          return _context7.abrupt("return", '');
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteUser(_x8) {
    return _ref7.apply(this, arguments);
  };
}();

//get single user
exports.deleteUser = deleteUser;
var getUser = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id) {
    var data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return User.findByPk(id);
        case 2:
          data = _context8.sent;
          return _context8.abrupt("return", data);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getUser(_x9) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getUser = getUser;