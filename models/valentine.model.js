const sequelize = require("sequelize");
const db = require('../db')
const Valentine = db.define("valentine", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    img: { type: sequelize.STRING, allowNull: false},
    title: { type: sequelize.STRING, allowNull: false},
    text: { type: sequelize.TEXT, allowNull: false},
    status: {type: sequelize.ENUM, values:['isread','unread'], defaultValue: 'unread'},
  })

module.exports = Valentine