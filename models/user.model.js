const sequelize = require("sequelize");
const db = require('../db')
const Valentine = require('../models/valentine.model')
const User = db.define("user", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    avatar: { type: sequelize.STRING, allowNull: false},
    username: { type: sequelize.STRING, allowNull: false},
    password: { type: sequelize.STRING, allowNull: false},
    subscription: { type: sequelize.JSON, allowNull: true},
    online: {type: sequelize.ENUM, values:['Y','N'], defaultValue: 'N'},
  })

  User.hasMany(Valentine, { onDelete: "cascade"});
module.exports = User