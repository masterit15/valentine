const sequelize = require("sequelize");
const db = require('../db')
const User = require('../models/user.model')
const Departament = db.define("departament", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: { type: sequelize.STRING, allowNull: false},
  })
  User.hasMany(User);
module.exports = Departament