import sequelize, { DataTypes } from '../config/database';
import logger from '../config/logger';
const User = require('../models/user')(sequelize, DataTypes);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//get all users
export const getAllUsers = async () => {
  const data = await User.findAll();
  return data;
};

//create new user
export const newUser = async (body) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(body.password, saltRounds);
  body.password = hash;
  const data = await User.create(body);
  return data;
};

//login user
export const loginUser = async (body) => {
  let email = body.email;
  logger.info("login email", email)
  let data = await User.findAll({ where: { email: email } });
  if (data.length !== 0) {
    let passwordvalidator = await bcrypt.compare(body.password, data[0].password);
    if (passwordvalidator) {
      let token = jwt.sign({ email: data[0].email, firstName: data[0].firstName, id: data[0]._id }, process.env.SECRET_KEY);
      return token;
    } else {
      throw new Error('Password Is incorrect.....');
    }

  } else {
    throw new Error('Email Is incorrect.....');

  }

};

//forgot password
export const forgotPassword = async (body) => {
  let data = await User.findAll({ where: { email: body.email } });
  if (data.length !== 0) {
    let newtoken = jwt.sign({ email: data[0].email, firstName: data[0].firstName, id: data[0]._id }, process.env.SECRET_KEY);
    return newtoken;
  } else {
    throw new Error('Email is not found.....');
  }

};

//reset password
export const resetPassword = async (body, email) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashPassword;
  await User.update(body, {
    where: { email: email }
  }
  );
  return body;
};







//update single user
export const updateUser = async (id, body) => {
  await User.update(body, {
    where: { id: id }
  });
  return body;
};

//delete single user
export const deleteUser = async (id) => {
  await User.destroy({ where: { id: id } });
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findByPk(id);
  return data;
};
